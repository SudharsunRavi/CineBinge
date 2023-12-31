import MovieCard from "../BrowseContainer/MovieCard"

const MovieSuggestions = ({ searchResults }) => {

    return (
        <div className="flex flex-wrap m-10 ">
            <br/>
            {searchResults && searchResults.map((result) => (
                <MovieCard key={result.id} movieId={result.id} posterPath={result.poster_path}/>
            ))}
        </div>
    )
}

export default MovieSuggestions