import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Sidebar.scss';
import Platzi from '../../assets/icons/Platzi.svg';
import ArrowBtn from '../../assets/icons/arrow-btn.svg';
import DashboardIcon from '../../assets/icons/dashboard.svg';
import MyListIcon from '../../assets/icons/favorites.svg';
import UserIcon from '../../assets/icons/user.svg';
import { NavLink } from 'react-router-dom';
import { toggleNav } from '../../Store/Actions/navActions';

const Sidebar = () => {
  const isOpen = useSelector((state) => state.navOpen.isOpen);
  const favCount = useSelector((state) => state.movies.favMovies.length);
  const dispatch = useDispatch();

  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar close'}>
      <ul className="sidebar__links">
        <li className="sidebar__link">
          <NavLink to="/">
            <div className="sidebar__logo">
              <img src={Platzi} alt="platzi logo" />
              <h1>Platzi Movies</h1>
            </div>
          </NavLink>
        </li>

        <div className="sidebar__menu">
          <li className="sidebar__link">
            <NavLink exact to="/">
              <img src={DashboardIcon} alt="dashboard icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li className="sidebar-link">
            <NavLink to="/favorites">
              <img src={MyListIcon} alt="my List icon" />
              <span>
                Favorites <small>{favCount}</small>
              </span>
            </NavLink>
          </li>

          <li className="sidebar-link">
            <NavLink to="/user">
              <img src={UserIcon} alt="user icon" />
              <span>User</span>
            </NavLink>
          </li>
        </div>

        <button
          className={isOpen ? 'sidebar__btn' : 'sidebar__btn close'}
          onClick={(e) => dispatch(toggleNav(!isOpen))}
        >
          <img src={ArrowBtn} alt="close btn" />
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
