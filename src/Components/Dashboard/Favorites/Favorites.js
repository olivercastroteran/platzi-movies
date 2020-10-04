import React from 'react';
import './Favorites.scss';
import { useSelector } from 'react-redux';
import GoBack from '../../UI/GoBack/GoBack';
import FavMovie from './FavMovie';

const Favorites = () => {
  const isOpen = useSelector((state) => state.navOpen.isOpen);
  const favMovies = useSelector((state) => state.movies.favMovies);

  return (
    <div className={isOpen ? 'favorites' : 'favorites close'}>
      <GoBack />
      <h2>
        My Favorite Movies - <span>{favMovies.length}</span>
      </h2>
      <div className="fav-movies-container">
        {favMovies?.map((movie) => (
          <FavMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
