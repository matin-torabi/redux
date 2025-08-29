import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBurger = createAsyncThunk("/burger/fetch", async () => {
  let data = await fetch(
    "https://matin-torabi.github.io/db/db.json"
  );
  let res = await data.json();

  return res.burger;
});

export const BurgerSlice = createSlice({
  name: "burger",
  initialState: {
    post: [],
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBurger.fulfilled, (state, action) => {
        state.post = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchBurger.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBurger.rejected, (state) => {
        state.error = "server-rejected";
      });
  },
});

export default BurgerSlice.reducer;
