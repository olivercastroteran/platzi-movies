import React from 'react';
import './GoBack.scss';
import { useHistory } from 'react-router-dom';
import { ReactComponent as GoBackIcon } from '../../../assets/icons/go-back.svg';

const GoBack = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div data-testid="go-back" className="go-back">
      <GoBackIcon onClick={goBack} />
    </div>
  );
};

export default GoBack;
