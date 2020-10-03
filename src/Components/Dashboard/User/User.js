import React from 'react';
import './User.scss';
import { useSelector } from 'react-redux';

const User = () => {
  const isOpen = useSelector((state) => state.navOpen.isOpen);
  return (
    <div className={isOpen ? 'user' : 'user close'}>
      <h1>User</h1>
    </div>
  );
};

export default User;
