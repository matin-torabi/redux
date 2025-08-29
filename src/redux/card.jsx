import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCard = createAsyncThunk("/card/fetch", async()=>{
    const data = await fetch("https://matin-torabi.github.io/db/db.json")
    const res = await data.json()
    return res
})

export const cardSlice = createSlice({
    name:"card",
    initialState:{
        card:[],
        loading:true,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCard.fulfilled, (state, action)=>{
            state.loading = false
            state.error = ""
            state.card = action.payload
        }).addCase(fetchCard.pending, (state)=>{
            state.loading = true
        }).addCase(fetchCard.rejected, (state)=>{
            state.error = "server reject ...!"
        })
    }
})

export default cardSlice.reducer