import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMenu = createAsyncThunk("/menu/fetch", async()=>{
    const data = await fetch("https://matin-torabi.github.io/db/db.json")
    const res = await data.json()
    return res
})

export const menuSlice = createSlice({
    name:"menu",
    initialState:{
        menu:[],
        loading:true,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchMenu.fulfilled, (state, action)=>{
            state.loading = false
            state.error = ""
            state.menu = action.payload
        }).addCase(fetchMenu.pending, (state)=>{
            state.loading = true
        }).addCase(fetchMenu.rejected, (state)=>{
            state.error = "server reject ...!"
        })
    }
})

export default menuSlice.reducer