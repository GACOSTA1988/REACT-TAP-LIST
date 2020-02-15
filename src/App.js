import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header/>
        <NavBar/>
    </div>
  );
}

export default App;
