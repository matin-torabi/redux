import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDastresi = createAsyncThunk("/dastresi/fetch", async()=>{
    const data = await fetch("https://matin-torabi.github.io/db/db.json")
    const res = await data.json()
    return res
})

export const dastresiSlice = createSlice({
    name:"dastresi",
    initialState:{
        dastresi:[],
        loading:true,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchDastresi.fulfilled, (state, action)=>{
            state.loading = false
            state.error = ""
            state.dastresi = action.payload
        }).addCase(fetchDastresi.pending, (state)=>{
            state.loading = true
        }).addCase(fetchDastresi.rejected, (state)=>{
            state.error = "server reject ...!"
        })
    }
})

export default dastresiSlice.reducer