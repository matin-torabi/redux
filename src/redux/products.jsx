import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("/products/fetch", async()=>{
    const data = await fetch("https://matin-torabi.github.io/db/db.json")
    const res = await data.json()
    return res
})

export const productsSlice = createSlice({
    name:"products",
    initialState:{
        products:[],
        loading:true,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.loading = false
            state.error = ""
            state.products = action.payload
        }).addCase(fetchProducts.pending, (state)=>{
            state.loading = true
        }).addCase(fetchProducts.rejected, (state)=>{
            state.error = "server reject ...!"
        })
    }
})

export default productsSlice.reducer