import { useEffect } from "react";
import { TMDB_API } from "../utils/constants"
import { useParams } from "react-router-dom";

import VideoBackground from "./BrowseContainer/VideoBackground";
import VideoTitle from "./BrowseContainer/VideoTitle";
import { useSelector } from "react-redux";

const Watchpage = () => {
    const {movieID}=useParams();

    const movieDetails=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieID+'?language=en-US', TMDB_API)
        const jsonData=await data.json();
        console.log(jsonData);
    }
    useEffect(() => {
        movieDetails();
    }, [])

    // if (!movies[movieID]) return;
    const {original_title, overview, id}=[movieID];
    console.log(original_title);
  return (
    <div>
        <VideoBackground movieId={movieID}/>
    </div>
  )
}

export default Watchpage