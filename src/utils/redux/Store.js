import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./userSlice";
import MoviesSliceReducer from "./moviesSlice";     

const Store=configureStore({
    reducer:{
        user:UserSliceReducer,
        movies:MoviesSliceReducer,
    },
})

export default Store