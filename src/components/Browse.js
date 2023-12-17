import Header from "./Header"
import MainContainer from "./BrowseContainer/MainContainer"
import useNowPlaying from "../utils/hooks/useNowPlaying";
import usePopular from "../utils/hooks/usePopular";
import SecondaryContainer from "./BrowseContainer/SecondaryContainer";
import useTrending from "../utils/hooks/useTrending";
import useUpcoming from "../utils/hooks/useUpcoming";

const Browse=()=>{
    useNowPlaying();
    usePopular();
    useTrending();
    useUpcoming();

    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
        
    )
}

export default Browse



