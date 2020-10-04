import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as PlusIcon } from '../../../../assets/icons/plus.svg';
import { ReactComponent as CheckIcon } from '../../../../assets/icons/check.svg';
import { addToFavorites } from '../../../../Store/Actions/moviesActions';

const Movie = ({ movie }) => {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  const addToFavs = () => {
    setCheck(true);
    dispatch(addToFavorites(movie));
  };
  return (
    <div className="movie__card">
      <img
        alt="movie poster"
        className="movie__card--img"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
      />
      <div className="movie__info">
        <p>{movie.title}</p>
        {!check ? <PlusIcon onClick={addToFavs} /> : <CheckIcon />}
      </div>
    </div>
  );
};

export default Movie;
