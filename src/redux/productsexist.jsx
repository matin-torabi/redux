import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsexist = createAsyncThunk("/productsexist/fetch", async()=>{
    const data = await fetch("https://matin-torabi.github.io/db/db.json")
    const res = await data.json()
    return res
})

export const productsexistSlice = createSlice({
    name:"productsexist",
    initialState:{
        productsexist:[],
        loading:true,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductsexist.fulfilled, (state, action)=>{
            state.loading = false
            state.error = ""
            state.productsexist = action.payload
        }).addCase(fetchProductsexist.pending, (state)=>{
            state.loading = true
        }).addCase(fetchProductsexist.rejected, (state)=>{
            state.error = "server reject ...!"
        })
    }
})

export default productsexistSlice.reducer
