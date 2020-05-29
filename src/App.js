import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import Home from './components/Home'
import Servicios from './components/Servicios'
import Centro from './components/Centro'
import Team from './components/Team'
import Contacto from './components/Contacto'
import Logo from './img/singularis_logo_small.jpg'
import './App.css';

function App() {
  return (
    <>
      <div className="header"> 
        <img src={Logo} alt="logo singularis" />
        <ul className="navbar">
          <li className="navbar-link"><NavLink to="/">Home</NavLink></li>
          <li className="navbar-link"><NavLink to="/servicios">Servicios</NavLink></li>
          <li className="navbar-link"><NavLink to="/centro">Centro</NavLink></li>
          <li className="navbar-link"><NavLink to="/team">Team</NavLink></li>
          <li className="navbar-link"><NavLink to="/contacto">Contacto</NavLink></li>
          <li className="hamburguerMenu" id="mobileIcon">
            <div className="linea" id="linea-1"></div>
            <div className="linea" id="linea-2"></div>
            <div className="linea" id="linea-3"></div>
          </li>
        </ul>

        <div className="mobile-menu">
          <ul id="mobileMenu">
            <li><NavLink to="/" className="mobileLink">Home</NavLink></li>
            <li><NavLink to="/servicios" className="mobileLink">Servicios</NavLink></li>
            <li><NavLink to="/centro" className="mobileLink">Centro</NavLink></li>
            <li><NavLink to="/team" className="mobileLink">Team</NavLink></li>
            <li><NavLink to="/contacto" className="mobileLink">Contacto</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/centro" component={Centro} />
        <Route path="/team" component={Team} />
        <Route path="/contacto" component={Contacto} />
      </div>
    </>
  );
}

export default App;
