import React from 'react';

const FavMovie = ({ movie }) => {
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
        <button className="delete">Remove</button>
      </div>
    </div>
  );
};

export default FavMovie;
