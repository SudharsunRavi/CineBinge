import Header from "./Header"
import MainContainer from "./BrowseContainer/MainContainer"
import useNowPlaying from "../utils/hooks/useNowPlaying";

const Browse=()=>{
    useNowPlaying();

    return(
        <div>
            <Header/>
            <MainContainer/>
        </div>
        
    )
}

export default Browse



