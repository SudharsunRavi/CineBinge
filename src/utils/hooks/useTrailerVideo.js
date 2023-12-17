import { useDispatch, useSelector } from "react-redux";
import { TMDB_API } from "../constants";
import { addTrailerVideo } from "../redux/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo=(movieId)=>{
    const dispatch=useDispatch();

    const movieVideos=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", TMDB_API)
        const jsonData=await data.json()

        const filterTrailer=jsonData.results.filter((video)=>video.type==='Trailer')
        const trailer=filterTrailer.length===0 ? jsonData.results[0] : filterTrailer[0]

        dispatch(addTrailerVideo(trailer))
    }

    useEffect(()=>{
        movieVideos()
    },[])
}

export default useTrailerVideo

