import React from 'react';
import './Dashboard.scss';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const isOpen = useSelector((state) => state.navOpen.isOpen);

  return (
    <div className={isOpen ? 'dashboard' : 'dashboard close'}>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
