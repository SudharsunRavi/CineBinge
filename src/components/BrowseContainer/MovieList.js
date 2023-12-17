import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {

    return (
        <div className="p-6  w-screen">
            <h1 className="text-white text-2xl pb-4">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex">
                    {movies?.map((movie)=>{
                        return <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                    })}
                </div>
            </div>
            
        </div>
    );
};

export default MovieList;
