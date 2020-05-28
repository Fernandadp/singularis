import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import Home from './components/Home'
import Servicios from './components/Servicios'
import Centro from './components/Centro'
import Team from './components/Team'
import Contacto from './components/Contacto'
import './App.css';

function App() {
  return (
    <>
      <h1>SINGULARIS</h1>
      <ul className="header">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/servicios">Servicios</NavLink></li>
        <li><NavLink to="/centro">Centro</NavLink></li>
        <li><NavLink to="/team">Team</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>

      <div className="content">
        <Route path="/" component={Home} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/centro" component={Centro} />
        <Route path="/team" component={Team} />
        <Route path="/contacto" component={Contacto} />
      </div>
    </>
  );
}

export default App;
