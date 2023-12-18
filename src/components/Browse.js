import Header from "./Header"
import MainContainer from "./BrowseContainer/MainContainer"
import useNowPlaying from "../utils/hooks/useNowPlaying";
import usePopular from "../utils/hooks/usePopular";
import SecondaryContainer from "./BrowseContainer/SecondaryContainer";
import useTrending from "../utils/hooks/useTrending";
import useUpcoming from "../utils/hooks/useUpcoming";
import GPTSearch from "./GPTContainer/GPTSearch";
import { useSelector } from "react-redux";

const Browse=()=>{
    const gptSearch=useSelector((store)=>store.gpt.toogleGPTSearch)

    useNowPlaying();
    usePopular();
    useTrending();
    useUpcoming();

    return(
        <div>
            <Header/>
            {gptSearch ? 
                <GPTSearch/> 
                : 
                <>
                    <MainContainer/>
                    <SecondaryContainer/>
                </> 
            }
            
            
        </div>
        
    )
}

export default Browse



