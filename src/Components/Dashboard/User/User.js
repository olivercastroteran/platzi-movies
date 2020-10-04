import React from 'react';
import './User.scss';
import { useSelector } from 'react-redux';
import GoBack from '../../UI/GoBack/GoBack';
import { ReactComponent as UserIcon } from '../../../assets/images/director.svg';

const User = () => {
  const isOpen = useSelector((state) => state.navOpen.isOpen);
  return (
    <div className={isOpen ? 'user' : 'user close'}>
      <GoBack />
      <div className="user__container">
        <UserIcon />
      </div>
    </div>
  );
};

export default User;
