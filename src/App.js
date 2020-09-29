import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';
import About from './components/Pages/About';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services}/>
          <Route path="/about" component={About}/>
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
