import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk("/articles/fetch", async()=>{
    const data = await fetch("https://matin-torabi.github.io/db/db.json")
    const res = await data.json()
    return res
})

export const articlesSlice = createSlice({
    name:"articles",
    initialState:{
        articles:[],
        loading:true,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchArticles.fulfilled, (state, action)=>{
            state.loading = false
            state.error = ""
            state.articles = action.payload
        }).addCase(fetchArticles.pending, (state)=>{
            state.loading = true
        }).addCase(fetchArticles.rejected, (state)=>{
            state.error = "server reject ...!"
        })
    }
})

export default articlesSlice.reducer