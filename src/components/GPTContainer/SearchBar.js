import { useSelector } from "react-redux"
import languages from "../../utils/languageConstants"
import { useEffect, useRef, useState } from "react"
import { TMDB_API } from "../../utils/constants"

import MovieSuggestions from "./MovieSuggestions"

const SearchBar=()=>{

    const searchRef=useRef(null)
    const [searchResults,setSearchResults]=useState([])
    const user_language=useSelector((store)=>store.language.selectedLanguage)

    const handleSearch=async()=>{
            const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+searchRef.current.value+'&include_adult=false&language=en-US&page=1', TMDB_API)
            const jsonData=await data.json();
            setSearchResults(jsonData.results)
            console.log(jsonData.results);
            return searchResults;
    }
  
    return(
        <div className="bg-black">
            <div className="flex justify-start mt-44 mb-24 mx-28">
                <form onSubmit={(e)=>e.preventDefault()}>
                    <input ref={searchRef} type="text" placeholder={languages[user_language].searchBarPlaceholder} className="bg-gray-800 text-white p-2 w-[420px] rounded-lg"/>
                    <button type="submit" className="bg-red-500 text-white p-2 rounded-lg ml-3" onClick={handleSearch}>{languages[user_language].search}</button>
                </form>
            </div>
            
            <div className="mx-28">
                <MovieSuggestions searchResults={searchResults} />
            </div>
        </div>
    )
}

export default SearchBar