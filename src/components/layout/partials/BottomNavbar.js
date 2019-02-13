import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar navbar-light fixed-bottom bg-white border-top">
      <div className="container-fluid">
        <Link to="/explore" className="navbar-link ml-auto text-dark">
          <i className="fas fa-search" />
        </Link>
        <Link to="/add" className="navbar-link m-auto text-dark">
          <i className="far fa-plus-square" />
        </Link>
        <Link to="/feed" className="navbar-link mr-auto text-dark">
          <i className="fas fa-home" />
        </Link>
      </div>
    </nav>
  );
};
