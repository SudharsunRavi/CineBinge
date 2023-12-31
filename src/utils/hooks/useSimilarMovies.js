import { useDispatch, useSelector } from "react-redux";
import { TMDB_API } from "../constants";
import { useEffect } from "react";
import { addSimilarMovies } from "../redux/moviesSlice";
import { useParams } from "react-router-dom";

const useSimilarMovies=()=>{
    const {movieId}=useParams();
    const dispatch=useDispatch()

    const getSimilar=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/similar?language=en-US&page=1', TMDB_API)
        const jsonData=await data.json();
        //console.log(jsonData.results);
        if (jsonData.results && jsonData.results.length > 0) {
            dispatch(addSimilarMovies(jsonData.results));
        }
    }

    useEffect(()=>{
        getSimilar();
    },[movieId, dispatch])

    const similarMovies = useSelector((state) => state.movies.similarMovies);
    return similarMovies;

};

export default useSimilarMovies;
    