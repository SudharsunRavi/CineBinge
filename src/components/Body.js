import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Login from "./Login"
import Browse from "./Browse"
import Watchpage from "./Watchpage";

const Body=()=>{

        const appRouter=createBrowserRouter([
            {
                path:"/",
                element:<Login/>
            },
            {
                path:"/browse",
                element:<Browse/>
            },
            {
                path: '/browse/:movieID',
                element : <Watchpage />,
            }
        ]);

        return(
            <RouterProvider router={appRouter} />
        )
    }

export default Body