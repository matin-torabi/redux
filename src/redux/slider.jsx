import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSlider = createAsyncThunk("/slider/fetch", async()=>{
    const data = await fetch("https://matin-torabi.github.io/db/db.json")
    const res = await data.json()
    return res
})

export const sliderSlice = createSlice({
    name:"slider",
    initialState:{
        slider:[],
        loading:true,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchSlider.fulfilled, (state, action)=>{
            state.loading = false
            state.error = ""
            state.slider = action.payload
        }).addCase(fetchSlider.pending, (state)=>{
            state.loading = true
        }).addCase(fetchSlider.rejected, (state)=>{
            state.error = "server reject ...!"
        })
    }
})

export default sliderSlice.reducer