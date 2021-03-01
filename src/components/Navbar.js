import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/icon.svg';
import '../assets/css/Navbar.css';

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <img src={logo} alt="logo" />
      <h4 className="text-uppercase font-weight-bold lead">welcome to covid-19 tracker</h4>
      <Link to="/" className="btn btn-info">Home</Link>
    </div>
  );
}

export default Navbar;
