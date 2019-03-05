import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser, logoutUser } from './actions/authActions';
import PrivateRoute from './components/common/PrivateRoute';

import Welcome from './components/pages/Welcome';
import About from './components/pages/About';
import Author from './components/pages/Author';
import Latest from './components/pages/Latest';
import Login from './components/auth/Login';
import Feed from './components/pages/Feed';
import AddPhoto from './components/pages/AddPhoto';
import Profile from './components/pages/Profile';
import NotFound from './components/pages/NotFound';

import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthentiacated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/author" component={Author} />
            <Route exact path="/latest" component={Latest} />
            <Route exact path="/profile/:handle" component={Profile} />
            <Switch>
              <PrivateRoute exact path="/feed" component={Feed} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/add" component={AddPhoto} />
            </Switch>
            <Route exact path="/not-found" component={NotFound} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
