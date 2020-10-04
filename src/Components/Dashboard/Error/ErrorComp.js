import React from 'react';
import './ErrorComp.scss';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import GoBack from '../../UI/GoBack/GoBack';
import { ReactComponent as Astronaut } from '../../../assets/images/astronaut.svg';

const ErrorComp = () => {
  const isOpen = useSelector((state) => state.navOpen.isOpen);
  const history = useHistory();

  return (
    <div className={isOpen ? 'error' : 'error close'}>
      <GoBack />
      <div className="error__container">
        <Astronaut />
        <h2>Did you get lost...?</h2>
        <p>Please go back</p>
        <button className="lost-btn" onClick={(e) => history.push('/')}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorComp;
