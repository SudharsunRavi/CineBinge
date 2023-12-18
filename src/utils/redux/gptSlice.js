import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
    name:"gpt",
    initialState:{
        toogleGPTSearch:false,
    },
    reducers:{
        toogleGPTSearch:(state,action)=>{
            state.toogleGPTSearch=!state.toogleGPTSearch;
        }
    }
})

export const {toogleGPTSearch}=GPTSlice.actions;

export default GPTSlice.reducer;