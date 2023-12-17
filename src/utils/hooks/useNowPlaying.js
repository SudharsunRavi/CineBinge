import { useDispatch } from "react-redux";
import { TMDB_API } from "../constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../redux/moviesSlice";


const useNowPlaying=()=>{

    const dispatch=useDispatch()
    const getNowPlaying=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_API);
        const jsonData=await data.json();
        //console.log(jsonData.results);
        dispatch(addNowPlayingMovies(jsonData.results))
    }

    useEffect(()=>{
        getNowPlaying();
    },[])

};

export default useNowPlaying;
    