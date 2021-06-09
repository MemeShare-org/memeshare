import React, { useEffect, useState, useMemo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import UserContext from "./context/userContext";
import { ToastContainer } from "react-toastify";
import changeStatus from "./actions/user/changeStatus";
import Home from "./pages/home/index";
import Profile from "./pages/profile/index";
import Signup from "./pages/sign-up/index";
import Signin from "./pages/sign-in/index";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(decodeToken(localStorage.getItem("token")));
  const isTokenExpired = isExpired(localStorage.getItem("token"));

  const UserProvider = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    if (isTokenExpired) {
      localStorage.setItem("token", "");
      setUser();
    }
  }, [isTokenExpired]);

  useEffect(() => {
    const isClosed = window.closed;
    var status;

    if (user) {
      var id = user.userId;

      if (isClosed) {
        status = "offline";
        changeStatus({ id, status });
      } else {
        status = "online";
        changeStatus({ id, status });
      }
    }
  }, [user]);

  return (
    <div className='App'>
      <UserContext.Provider value={UserProvider}>
        <ToastContainer position='bottom-right' autoClose={1500} />
        <div className='routes'>
          <Switch>
            <Route exact path='/'>
              {user ? <Redirect to='/home' /> : <Redirect to='/sign-in' />}
            </Route>
            <Route path='/home'>
              {user ? <Home /> : <Redirect to='/sign-in' />}
            </Route>
            <Route path='/u/:id'>
              {user ? <Profile /> : <Redirect to='/sign-in' />}
            </Route>
            <Route path='/sign-up'>
              {user ? <Redirect to='/' /> : <Signup />}
            </Route>
            <Route path='/sign-in'>
              {user ? <Redirect to='/' /> : <Signin />}
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default App;
