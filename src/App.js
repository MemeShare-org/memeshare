import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/index';
import HomePage from './pages/home-page/index';
import OtherPage from './pages/other-page/index';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/other" component={OtherPage} />
        <Route path="/contact">
          <div className='centred-item'>
            <h1>Not created yet :(</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
