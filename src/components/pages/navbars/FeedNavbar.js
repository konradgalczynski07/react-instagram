import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/instagram.png';

export default function FeedNavbar() {
  return (
    <nav className="navbar navbar-light sticky-top bg-white border-bottom mb-md-5">
      <div className="container-fluid">
        <Link to="/feed" className="navbar-brand m-auto">
          <img
            src={logo}
            alt="brand logo"
            className="d-none d-md-inline"
            width="30px"
            height="30px"
          />{' '}
          Instagram
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/profile">
              <i className="far fa-user" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
