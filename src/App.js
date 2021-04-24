import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './pages/sign-up/index';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Signin} />
      </Switch>
    </div>
  );
}

export default App;
