import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './components/Home'
import Servicios from './components/Servicios'
import Centro from './components/Centro'
import Team from './components/Team'
import Contacto from './components/Contacto'

function App() {
  return (
    <>
      <Home />
      <Servicios />
      <Centro />
      <Team />
      <Contacto />
    </>
  );
}

export default App;
