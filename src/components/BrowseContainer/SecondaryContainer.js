import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer=()=> {

    const movies=useSelector((store)=>store.movies)
    console.log(movies)

    return (
        <div className="bg-black">
            <div className="relative -mt-[310px] z-20">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Popular"} movies={movies.popularMovies}/>
                <MovieList title={"Trending"} movies={movies.trendingMovies}/>
                <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
            </div>

        </div>
    );
}


export default SecondaryContainer;
