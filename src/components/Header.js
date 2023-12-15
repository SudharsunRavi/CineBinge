import { NETFLIX_LOGO } from "../utils/constants"

const Header=()=>{
    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
            <img src={NETFLIX_LOGO} 
                alt="Netflix Logo" 
                className="w-[380px] h-[100px] object-contain" 
            />
        </div>
    )
}

export default Header