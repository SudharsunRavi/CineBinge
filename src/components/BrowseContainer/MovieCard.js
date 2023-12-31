import React from "react";
import { Link } from "react-router-dom";
import { TMDB_MOVIE_IMG } from "../../utils/constants";

const MovieCard = ({ movieId, posterPath }) => {
  return (
    <div className="w-48 pr-5 cursor-pointer">
      <Link to={'/browse/'+movieId}>
        <img src={TMDB_MOVIE_IMG + posterPath} alt="movie poster" />
      </Link>
    </div>
  );
};

export default MovieCard;