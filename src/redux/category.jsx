import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk("/category/fetch", async()=>{
    const data = await fetch("https://matin-torabi.github.io/db/db.json")
    const res = await data.json()
    return res
})

export const categorySlice = createSlice({
    name:"category",
    initialState:{
        category:[],
        loading:true,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCategory.fulfilled, (state, action)=>{
            state.loading = false
            state.error = ""
            state.category = action.payload
        }).addCase(fetchCategory.pending, (state)=>{
            state.loading = true
        }).addCase(fetchCategory.rejected, (state)=>{
            state.error = "server reject ...!"
        })
    }
})

export default categorySlice.reducer