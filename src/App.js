import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home'
import Team from './pages/team/team'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/header/header'


function App() {
  return (
    <Router>
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={Team}/>
    </Router>
  );
}

export default App;
