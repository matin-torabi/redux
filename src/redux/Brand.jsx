import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBrand = createAsyncThunk("/brand/fetch", async()=>{
    const data = await fetch("https://matin-torabi.github.io/db/db.json")
    const res = await data.json()
    return res
})

export const brandSlice = createSlice({
    name:"brand",
    initialState:{
        brand:[],
        loading:true,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchBrand.fulfilled, (state, action)=>{
            state.loading = false
            state.error = ""
            state.brand = action.payload
        }).addCase(fetchBrand.pending, (state)=>{
            state.loading = true
        }).addCase(fetchBrand.rejected, (state)=>{
            state.error = "server reject ...!"
        })
    }
})

export default brandSlice.reducer