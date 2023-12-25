import MovieSuggestions from "./MovieSugesstions"
import SearchBar from "./SearchBar"

const GPTSearch=()=>{
    return(
        <div className="bg-black absolute w-full h-screen">
            <SearchBar/>
            <MovieSuggestions/>
        </div>
    )
}

export default GPTSearch