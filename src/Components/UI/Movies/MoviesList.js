import React from 'react';
import './MoviesList.scss';
import { useSelector } from 'react-redux';
import Movie from './Movie/Movie';

const MoviesList = () => {
  const movies = useSelector((state) => state.movies.moviesFetch);
  return (
    <div className="movies">
      <h2>Related Movies</h2>
      <div className="movies__container">
        {movies &&
          movies.map((movie) => {
            return movie.poster_path ? (
              <Movie key={movie.id} movie={movie} />
            ) : null;
          })}
      </div>
    </div>
  );
};

export default MoviesList;
