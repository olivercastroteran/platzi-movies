import React from 'react';
import './ErrorComp.scss';
import { useSelector } from 'react-redux';
import GoBack from '../../UI/GoBack/GoBack';

const ErrorComp = () => {
  const isOpen = useSelector((state) => state.navOpen.isOpen);

  return (
    <div className={isOpen ? 'error' : 'error close'}>
      <GoBack />
      <h1>Error</h1>
    </div>
  );
};

export default ErrorComp;
