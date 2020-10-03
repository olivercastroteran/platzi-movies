import React from 'react';
import './App.scss';
import Sidebar from './Components/Navigation/Sidebar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import ErrorComp from './Components/Dashboard/Error/ErrorComp';
import User from './Components/Dashboard/User/User';
import Favorites from './Components/Dashboard/Favorites/Favorites';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/user" component={User} />
          <Route component={ErrorComp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
