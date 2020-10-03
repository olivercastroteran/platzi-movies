import React from 'react';
import './App.scss';
import Sidebar from './Components/Navigation/Sidebar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import MyList from './Components/Dashboard/MyList/MyList';
import ErrorComp from './Components/Dashboard/Error/ErrorComp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/my-list" component={MyList} />
          <Route component={ErrorComp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
