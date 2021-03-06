import React from 'react';
import './Dashboard.scss';
import { useSelector } from 'react-redux';
import GoBack from '../UI/GoBack/GoBack';
import SearchMovies from '../UI/SearchMovies/SearchMovies';
import MoviesList from '../UI/Movies/MoviesList';

const Dashboard = () => {
  const isOpen = useSelector((state) => state.navOpen.isOpen);

  return (
    <div className={isOpen ? 'dashboard' : 'dashboard close'}>
      <div className="dashboard__search">
        <GoBack />
        <SearchMovies />
      </div>
      <MoviesList />
    </div>
  );
};

export default Dashboard;
