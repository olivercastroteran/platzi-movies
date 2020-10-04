import React from 'react';
import './Favorites.scss';
import { useSelector } from 'react-redux';
import GoBack from '../../UI/GoBack/GoBack';

const Favorites = () => {
  const isOpen = useSelector((state) => state.navOpen.isOpen);

  return (
    <div className={isOpen ? 'favorites' : 'favorites close'}>
      <GoBack />
      <h1>Favorites</h1>
    </div>
  );
};

export default Favorites;
