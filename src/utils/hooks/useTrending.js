import { useDispatch } from "react-redux";
import { TMDB_API } from "../constants";
import { useEffect } from "react";
import { addTrendingMovies } from "../redux/moviesSlice";

const useTrending=()=>{

    const dispatch=useDispatch()
    const getTrendingMovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', TMDB_API)
        const jsonData=await data.json();
        //console.log(jsonData.results);
        dispatch(addTrendingMovies(jsonData.results))
    }

    useEffect(()=>{
        getTrendingMovies();
    },[])

};

export default useTrending;
    