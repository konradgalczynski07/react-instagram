import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
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
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/feed');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <section className="d-flex justify-content-center mt-5">
        <div className="row">
          <div className="col">
            <div className="bg-white border text-center py-3 px-4">
              <h1 className="display-5">Instagram</h1>
              <form onSubmit={this.onSubmit} className="my-4">
                <div className="form-group">
                  <input
                    className={classnames('form-control', {
                      'is-invalid': errors.username || errors.non_field_errors
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
                  {errors.non_field_errors && (
                    <div className="invalid-feedback">
                      {errors.non_field_errors}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    className={classnames('form-control', {
                      'is-invalid': errors.password || errors.non_field_errors
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
                  {errors.non_field_errors && (
                    <div className="invalid-feedback">
                      {errors.non_field_errors}
                    </div>
                  )}
                </div>
                <button
                  className="btn btn-primary btn-block font-weight-bold"
                  type="submit"
                >
                  Log in
                </button>
              </form>
            </div>
            <div className="bg-white border text-center mt-3">
              <p className="my-4">
                Don't have an account? <Link to="/">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
