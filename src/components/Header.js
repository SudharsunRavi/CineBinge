import { LANGUAGES, NETFLIX_LOGO } from "../utils/constants"

import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { toogleGPTSearch } from "../utils/redux/gptSlice";
import { changeLanguage } from "../utils/redux/langSlice";

const Header=()=>{

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const user=useSelector((store)=>store.user)
    const gptSearch=useSelector((store)=>store.gpt.toogleGPTSearch)

    const handleSignOut=()=>{
        signOut(auth)
        .then(() => {})
        .catch((error) => {
            navigate("/error")
        });
    }

    const handleToogleGPTSearch=()=>{
        dispatch(toogleGPTSearch())
    }

    const handleLanguage=(e)=>{
        dispatch(changeLanguage(e.target.value))
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
              navigate("/browse")
            } else {
              dispatch(removeUser())
              navigate("/")
            }
          });
        
        return()=>{unsubscribe()} //unsubscribe from the listener when the component unmounts
    },[])

    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10">
            <div className="flex justify-between">
                <img src={NETFLIX_LOGO} 
                    alt="Netflix Logo" 
                    className="w-[380px] h-[100px] object-contain" 
                />

                {user && (
                <div>
                    {gptSearch && 
                        <select className="m-7 px-4 py-2 float-right bg-gray-600 text-white"  onChange={handleLanguage}>
                            {LANGUAGES.map((languages)=>
                                (
                                    <option key={languages.identifier} value={languages.identifier} className="text-black">
                                        {languages.name}
                                    </option>
                                )
                            )}
                        </select>
                    }
                    <button className="cursor-pointer mt-6 mx-4 text-white font-semibold text-4xl float-left" onClick={handleToogleGPTSearch}>{gptSearch ? "X" : "🔍" }</button>
                    <img src={user.photoURL} className="w-11 h-11 mt-6 float-left"/>
                    <button className="cursor-pointer mt-8 ml-2 text-white font-semibold text-lg" onClick={handleSignOut}>Sign Out</button>
                </div>)}
                
            </div>
            
            
        </div>
    )
}

export default Header