import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../../img/instagram.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('/login');
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <button
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link btn btn-primary text-white font-weight-bold"
          >
            Logout
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link btn btn-primary text-white font-weight-bold"
            to="/login"
          >
            Log In
          </Link>
        </li>
        <li className="nav-item ml-2">
          <Link className="nav-link text-primary font-weight-bold" to="/">
            Sign Up
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand navbar-light sticky-top bg-white border-bottom mb-md-5">
        <div className="container">
          <Link to={isAuthenticated ? '/feed' : '/'} className="navbar-brand">
            <img src={logo} alt="brand logo" width="30px" height="30px" />
            <span className="d-none d-md-inline"> Instagram</span>
          </Link>
          <div className="d-none d-md-block m-auto form-group has-search">
            <span className="fas fa-search form-control-feedback" />
            <input type="text" className="form-control" placeholder="Search" />
          </div>

          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Navbar));
