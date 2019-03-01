import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';

class ProfileNavbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('/login');
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link
            to="#"
            className="nav-link dropdown-toggle text-dark"
            data-toggle="dropdown"
          >
            <i className="fas fa-cog" />
          </Link>
          <div className="dropdown-menu dropdown-menu-right ">
            <Link to="/settings" className="dropdown-item">
              <i className="fas fa-cog" /> Settings
            </Link>
            <Link to="/login" className="dropdown-item">
              <i className="fas fa-user-times" /> Logout
            </Link>
          </div>
        </li>
      </ul>
    );

    const questLinks = (
      <div>
        <Link to="/feed" className="navbar-link text-dark">
          <i className="fas fa-chevron-left" />
        </Link>
        <p className="navbar-brand font-weight-bold m-auto">Profile</p>
      </div>
    );

    return (
      <nav className="navbar navbar-expand navbar-light sticky-top bg-white border-bottom mb-md-5">
        <div className="container-fluid" />
      </nav>
    );
  }
}

ProfileNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(ProfileNavbar);
