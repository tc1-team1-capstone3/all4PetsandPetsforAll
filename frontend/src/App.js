import React, { Component, useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
  }, [])
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <h1 className="App-title">{message}</h1>*/}
      {/*</header>*/}
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/admin' component={Admin} />
            </Switch>
        </Router>
    </div>
  )
}

export default App;