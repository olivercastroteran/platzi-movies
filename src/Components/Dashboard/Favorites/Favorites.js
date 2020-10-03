import React from 'react';
import './Favorites.scss';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const isOpen = useSelector((state) => state.navOpen.isOpen);

  return (
    <div className={isOpen ? 'favorites' : 'favorites close'}>
      <h1>Favorites</h1>
    </div>
  );
};

export default Favorites;
