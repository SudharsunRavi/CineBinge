import { TMDB_MOVIE_IMG } from "../../utils/constants";

const MovieCard = ({posterPath}) => {

    return (
        <div className="w-48 pr-5 cursor-pointer">
            <img src={TMDB_MOVIE_IMG + posterPath} alt="movie poster" />
        </div>
    );
};

export default MovieCard;
