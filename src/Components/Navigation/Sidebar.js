import React from 'react';
import './Sidebar.scss';
import Platzi from '../../assets/icons/Platzi.svg';
import CloseBtn from '../../assets/icons/arrow-left.svg';
import DashboardIcon from '../../assets/icons/dashboard.svg';
import MyListIcon from '../../assets/icons/favorites.svg';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__links">
        <li className="sidebar__link">
          <Link to="/">
            <div className="sidebar__logo">
              <img src={Platzi} alt="platzi logo" />
              <h1>Platzi Movies</h1>
            </div>
          </Link>
        </li>

        <div className="sidebar__menu">
          <li className="sidebar__link">
            <NavLink to="/">
              <img src={DashboardIcon} alt="dashboard icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="sidebar-link">
            <NavLink to="/my-list">
              <img src={MyListIcon} alt="my List icon" />
              <span>My List</span>
            </NavLink>
          </li>
        </div>

        <button className="sidebar__btn">
          <img src={CloseBtn} alt="close btn" />
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
