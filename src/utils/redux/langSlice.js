import { createSlice } from "@reduxjs/toolkit";

const langSlice=createSlice({
    name:'lang',
    initialState:{
        selectedLanguage:"english"
    },
    reducers:{
        changeLanguage:(state, action)=>{
            state.selectedLanguage=action.payload
        },
    },
})

export const { changeLanguage }=langSlice.actions

export default langSlice.reducer