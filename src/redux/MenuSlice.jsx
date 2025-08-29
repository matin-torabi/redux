import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMenu = createAsyncThunk("/menu/fetch", async () => {
  let data = await fetch(
    "https://matin-torabi.github.io/db/db.json"
  );
  let res = await data.json();

  return res.menu;
});

export const MenuSlice = createSlice({
  name: "menu",
  initialState: {
    post: [],
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.post = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenu.rejected, (state) => {
        state.error = "server-rejected";
      });
  },
});

export default MenuSlice.reducer
