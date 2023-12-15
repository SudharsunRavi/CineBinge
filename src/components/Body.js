import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"

import Login from "./Login"
import Browse from "./Browse"
import { addUser, removeUser } from "../utils/redux/userSlice";

const Body=()=>{
        const dispatch=useDispatch()

        const appRouter=createBrowserRouter([
            {
                path:"/",
                element:<Login/>
            },
            {
                path:"/browse",
                element:<Browse/>
            },
        ]);

        useEffect(()=>{
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  const {uid, email, displayName} = user;
                  dispatch(addUser({uid:uid, email:email, displayName:displayName}))
                } else {
                  dispatch(removeUser())
                }
              });
        },[])
        

        return(
            <RouterProvider router={appRouter} />
        )
    }

export default Body