import React, { useState, useMemo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UserContext from "./context/userContext";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/index";
import Signup from "./pages/sign-up/index";
import Signin from "./pages/sign-in/index";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

const App = () => {
  const [user, setUser] = useState({
    _id: "2342543",
    username: "iLaD",
    email: "imcool@coolkid.com",
  });
  const UserProvider = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className='App'>
      <UserContext.Provider value={UserProvider}>
        <ToastContainer position='bottom-right' autoClose={1500} />
        <Switch>
          <Route exact path='/'>
            {user ? <Redirect to='/home' /> : <Redirect to='/sign-in' />}
          </Route>
          <Route path='/home'>
            {user ? <Home /> : <Redirect to='/sign-in' />}
          </Route>
          <Route path='/sign-up'>
            {user ? <Redirect to='/' /> : <Signup />}
          </Route>
          <Route path='/sign-in'>
            {user ? <Redirect to='/' /> : <Signin />}
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
};

export default App;
