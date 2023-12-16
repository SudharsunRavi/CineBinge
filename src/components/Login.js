import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { NETFLIX_BG } from "../utils/constants"
import Header from "./Header"
import Validation from "../utils/validation"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/userSlice";


const Login=()=>{

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [isSignIn,setIsSignIn]=useState(true)
    const [errorMessage,setErrorMessage]=useState(null)

    const name=useRef(null)
    const email=useRef(null)
    const password=useRef(null)

    const handleSignIn=()=>{
        setIsSignIn(!isSignIn)
    }

    const handleValidation=()=>{
        const emailValue=email.current.value
        const passwordValue=password.current.value

        const validation=Validation(emailValue,passwordValue)
        setErrorMessage(validation)
        if(validation===null){

            if(!isSignIn){
                //SIGN UP
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                        .then((userCredential) => {
                        const user = userCredential.user;
                        updateProfile(user, {
                        displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
                        }).then(() => {
                            const {uid, email, displayName, photoURL} = auth.currentUser;
                            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
                            navigate("/browse")
                        }).catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            setErrorMessage(errorCode+errorMessage)
                        });
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(errorCode+errorMessage)
                    });
            }

            else{
                //SIGN IN
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        navigate("/browse")
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(errorCode+errorMessage)
                    });
            }
        }

        
    }

    return(
        <div>
            <Header/>
            <img src={NETFLIX_BG} 
                alt="netlix-bg"
                className="absolute"
            />

            <div className="absolute w-3/12 h-[500px] mx-auto p-12 my-52 right-0 left-0 bg-black bg-opacity-80 text-white">
                <h1 className="mb-8 font-medium text-3xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>

                <form onSubmit={(e)=>e.preventDefault()}>
                    {!isSignIn && <input ref={name} type="text" placeholder="Name" className="p-2 my-4 w-full text-black rounded-lg" required/>}
                    <input ref={email} type="text" placeholder="Email" className="p-2 my-4 w-full text-black rounded-lg" required/>
                    <input ref={password} type="password" placeholder="Password"  className="p-2 my-4 w-full text-black rounded-lg" required/> <br/>
                    <p className="text-red-600">{errorMessage}</p>
                    <button className="p-2 my-4 bg-red-600 w-full rounded-lg" onClick={handleValidation}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                </form>

                <p className="py-3 cursor-pointer" onClick={handleSignIn}>{isSignIn ? "New to Netflix? Sign up" : "Already a user? Sign in"}</p>
            </div>

        </div>
    )
}

export default Login