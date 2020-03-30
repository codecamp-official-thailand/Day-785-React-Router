import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Map from './Pages/Map'
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Thailand</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/map">Map</Link>
      <br />
      <Link to="/">Home</Link>
      <br />
      <br />
      <br />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/profile/:idx" component={Profile} />
        <Route exact path="/error" component={NotFound} />
        <Redirect to="/error" />
      </Switch>
    </div>
  );
}

export default App;
