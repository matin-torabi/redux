import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHeaderTop = createAsyncThunk("/headerTop/fetch", async () => {
  let data = await fetch(
    "https://matin-torabi.github.io/db/db.json"
  );
  let res = await data.json();

  return res.header;
});

export const HeaderTopSlice = createSlice({
  name: "headerTop",
  initialState: {
    post: [],
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeaderTop.fulfilled, (state, action) => {
        state.post = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchHeaderTop.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHeaderTop.rejected, (state) => {
        state.error = "server-rejected";
      });
  },
});

export default HeaderTopSlice.reducer;
