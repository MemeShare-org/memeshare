import React, { useState, useMemo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UserContext from "./context/userContext";
import Signup from "./pages/sign-up/index";
import "./App.css";

const App = () => {
	const [user, setUser] = useState();
	const UserProvider = useMemo(() => ({ user, setUser }), [user, setUser]);

	return (
		<div className='App'>
			<UserContext.Provider value={UserProvider}>
				<Switch>
					<Route exact path='/'>
						{user ? <div>Home</div> : <Redirect to='/sign-up' />}
					</Route>
					<Route path='/sign-up'>
						{user ? <Redirect to='/' /> : <Signup />}
					</Route>
				</Switch>
			</UserContext.Provider>
		</div>
	);
};

export default App;
