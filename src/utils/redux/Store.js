import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./userSlice";

const Store=configureStore({
    reducer:{
        user:UserSliceReducer
    },
})

export default Store