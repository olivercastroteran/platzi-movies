import React from 'react';
import './ErrorComp.scss';
import { useSelector } from 'react-redux';

const ErrorComp = () => {
  const isOpen = useSelector((state) => state.navOpen.isOpen);

  return (
    <div className={isOpen ? 'error' : 'error close'}>
      <h1>Error</h1>
    </div>
  );
};

export default ErrorComp;
