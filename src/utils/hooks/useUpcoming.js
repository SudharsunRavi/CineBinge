import { useDispatch } from "react-redux";
import { TMDB_API } from "../constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../redux/moviesSlice";

const useUpcoming=()=>{

    const dispatch=useDispatch()
    const getUpcoming=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', TMDB_API)
        const jsonData=await data.json();
        //console.log(jsonData.results);
        dispatch(addUpcomingMovies(jsonData.results))
    }

    useEffect(()=>{
        getUpcoming();
    },[])

};

export default useUpcoming;
    