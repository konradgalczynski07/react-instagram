import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      fullname: '',
      username: '',
      password: '',
      errors: ''
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/feed');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      fullname: this.state.fullname,
      username: this.state.username,
      password: this.state.password
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.onSubmit} className="my-4">
        <div className="form-group">
          <input
            className={classnames('form-control', {
              'is-invalid': errors.email
            })}
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="fullname"
            placeholder="Fullname"
            value={this.state.fullname}
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <input
            className={classnames('form-control', {
              'is-invalid': errors.username
            })}
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.onChange}
          />
          {errors.username && (
            <div className="invalid-feedback">{errors.username}</div>
          )}
        </div>
        <div className="form-group">
          <input
            className={classnames('form-control', {
              'is-invalid': errors.password
            })}
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChange}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>
        <button
          className="btn btn-primary btn-block font-weight-bold"
          type="submit"
        >
          Register
        </button>
      </form>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
