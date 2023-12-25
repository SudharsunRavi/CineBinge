import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./userSlice";
import MoviesSliceReducer from "./moviesSlice";   
import GPTSliceReducer from "./gptSlice";  
import LanguageSliceReducer from "./langSlice";

const Store=configureStore({
    reducer:{
        user:UserSliceReducer,
        movies:MoviesSliceReducer,
        gpt:GPTSliceReducer,
        language:LanguageSliceReducer,
    },
})

export default Store