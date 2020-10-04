import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../../Store/Actions/moviesActions';

const FavMovie = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div className="fav-movie">
      <div className="fav-movie-top">
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt="movie poster"
        />
      </div>
      <div className="fav-movie-bottom">
        <h3>{movie.title}</h3>
        <p>Rating: {movie.vote_average}</p>
        <p>{movie.overview}</p>
        <button
          onClick={(e) => dispatch(removeFromFavorites(movie.id))}
          className="delete"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FavMovie;
