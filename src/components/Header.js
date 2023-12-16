import { NETFLIX_LOGO } from "../utils/constants"
import { USER_AVATAR } from "../utils/constants"

import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header=()=>{

    const navigate=useNavigate()

    const handleSignOut=()=>{
        signOut(auth).then(() => {
        navigate("/")
        }).catch((error) => {
        navigate("/error")
        });
    }

    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10">
            <div className="flex justify-between">
                <img src={NETFLIX_LOGO} 
                    alt="Netflix Logo" 
                    className="w-[380px] h-[100px] object-contain" 
                />

                <div>
                    <img src={USER_AVATAR} className="w-12 h-12 mt-6 float-left"/>
                    <button className="cursor-pointer mt-8 ml-2 text-white font-semibold text-lg" onClick={handleSignOut}>Sign Out</button>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default Header