import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/instagram.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';

class ProfileNavbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return (
      <nav className="navbar navbar-expand navbar-light sticky-top bg-white border-bottom mb-md-5">
        <div className="container-fluid">
          <a className="navbar-link text-dark" href="feed.html">
            <i className="fas fa-chevron-left" />
          </a>
          <p className="navbar-brand font-weight-bold m-auto">Profile</p>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle text-dark"
                data-toggle="dropdown"
              >
                <i className="fas fa-cog" />
              </a>
              <div className="dropdown-menu dropdown-menu-right ">
                <a href="settings.html" className="dropdown-item">
                  <i className="fas fa-cog" /> Settings
                </a>
                <a href="login.html" className="dropdown-item">
                  <i className="fas fa-user-times" /> Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
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
