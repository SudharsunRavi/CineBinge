import { useDispatch } from "react-redux";
import { TMDB_API } from "../constants";
import { useEffect } from "react";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopular=()=>{

    const dispatch=useDispatch()
    const getPopularMovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', TMDB_API)
        const jsonData=await data.json();
        //console.log(jsonData.results);
        dispatch(addPopularMovies(jsonData.results))
    }

    useEffect(()=>{
        getPopularMovies();
    },[])

};

export default usePopular;
    