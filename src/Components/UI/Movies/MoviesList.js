import React from 'react';
import './MoviesList.scss';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';
import { useSelector } from 'react-redux';

const MoviesList = () => {
  const movies = useSelector((state) => state.movies.moviesFetch);
  return (
    <div className="movies">
      <h2>Related Movies</h2>
      <div className="movies__container">
        {movies &&
          movies.map((movie) => {
            return movie.poster_path ? (
              <div key={movie.id} className="movie__card">
                <img
                  alt="movie poster"
                  className="movie__card--img"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                />
                <div className="movie__info">
                  <p>{movie.title}</p>
                  <PlusIcon />
                </div>
              </div>
            ) : null;
          })}
      </div>
    </div>
  );
};

export default MoviesList;
