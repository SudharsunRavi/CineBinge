import { useEffect, useState } from "react";
import { TMDB_API } from "../utils/constants"
import { useParams } from "react-router-dom";

import VideoBackground from "./BrowseContainer/VideoBackground";
import VideoTitle from "./BrowseContainer/VideoTitle";
import SimilarMovies from "./SimilarMovies";
import { NETFLIX_LOGO } from "../utils/constants"

const Watchpage = () => {
    const {movieId}=useParams();
    const [jsonData, setJsonData] = useState(null)


    const movieDetails=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'?language=en-US', TMDB_API)
        const jsonData=await data.json();
        setJsonData(jsonData);
        //console.log(jsonData);
        return jsonData;
    }
    useEffect(() => {
        movieDetails();
    }, [movieId])

    const {original_title, overview, genres} = jsonData || {};
    
  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10">
            <div className="flex justify-between">
                <img src={NETFLIX_LOGO} 
                    alt="Netflix Logo" 
                    className="w-[380px] h-[100px] object-contain" 
                />
                </div>
      </div>

      <div>
        <VideoTitle title={original_title} description={overview} genres={genres}/>
        <VideoBackground movieId={movieId}/>
      </div>

      <div className="relative -mt-[250px] z-20">
        <SimilarMovies/>
      </div>
      
    </>
  )
}

export default Watchpage