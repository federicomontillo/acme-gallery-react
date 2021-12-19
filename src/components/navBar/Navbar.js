import React from 'react';
import logo from '../../assets/logo.png';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar__bg">
      <div className="container-fluid navbar__width">
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarTogglerDemo01"
        >
          <a className="navbar-brand" href="#">
            <div className="navbar__contenedor-logo">
              <img src={logo} alt='Logo acme gallery'/>
            </div>
          </a>
          <button className="navbar__btn">Login</button>
          <a className="navbar__btn-mobile" href="#">
            <div className="navbar__hamburguer">
              <div className="navbar__line1"></div>
              <div className="navbar__line2"></div>
              <div className="navbar__line1"></div>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};
