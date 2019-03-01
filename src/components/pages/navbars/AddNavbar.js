import React from 'react';
import { Link } from 'react-router-dom';

export default function AddNavbar() {
  return (
    <nav className="navbar navbar-light sticky-top bg-white border-bottom mb-5">
      <div className="container-fluid">
        <Link to="/feed" className="navbar-link text-dark">
          <i className="fas fa-chevron-left" />
        </Link>
        <p className="navbar-brand font-weight-bold m-auto">Add Photo</p>
      </div>
    </nav>
  );
}
