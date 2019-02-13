import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Register from '../auth/Register';
import iphone from '../../img/iphone.png';

class Welcome extends Component {
  render() {
    return (
      <section className="container">
        <div className="row mt-5">
          <div className="col-md-6 d-none d-md-block p-0 text-center">
            <img className="img-fluid" src={iphone} alt="iphone frame" />
          </div>
          <div className="col-md-6">
            <div className="bg-white border text-center py-3 px-4">
              <h1 className="display-5">Instagram</h1>
              <h2 className="lead font-weight-bold text-muted">
                Sign up to see photos and <br />
                videos from your friends.
              </h2>
              <Register />
              <small>
                By signing up, you agree to our Terms . Learn how we collect,
                use and share your data in our Data Policy and how we use
                cookies and similar technology in our Cookies Policy .
              </small>
            </div>
            <div className="bg-white border text-center mt-3">
              <p className="my-4">
                Have an account? <Link to="/login"> Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
