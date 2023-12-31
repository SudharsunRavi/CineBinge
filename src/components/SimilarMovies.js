import MovieCard from "./BrowseContainer/MovieCard"
import useSimilarMovies from "../utils/hooks/useSimilarMovies";

const SimilarMovies = () => {
    const similarMovies=useSimilarMovies()
  return (
    <div className="pl-6">
      <div className="flex overflow-x-scroll no-scrollbar bg-black">
      <div className="flex">
        {similarMovies && similarMovies.map((movie)=>{
            return <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path}/>
        })}
      </div>
      </div>
    </div>
    
    
  )
}

export default SimilarMovies