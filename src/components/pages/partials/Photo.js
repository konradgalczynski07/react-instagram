import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Photo extends Component {
  render() {
    return (
      <div className="card  mb-5">
        <div className="card-header bg-white d-flex align-items-center p-0">
          <Link to="/profile" className="my-2 ml-3">
            <img
              className="img-fluid border rounded-circle"
              style={{ width: '40px' }}
              src="img/avatar.png"
              alt=""
            />
          </Link>
          <div className="ml-3">
            <Link to="/profile" className="text-decoration-none">
              <h6 className="font-weight-bold text-dark m-0">Mefio</h6>
            </Link>
            <p className="m-0">Wroclaw</p>
          </div>
        </div>
        <img
          className="img-fluid"
          src="https://source.unsplash.com/random/"
          style={{ maxHeight: '700px' }}
          alt=""
        />
        <div className="card-body">
          <section>
            <i className="far fa-heart fa-2x" />
            <i className="ml-2 far fa-comment fa-2x" />
          </section>
          <section>
            <a href="#" className="text-decoration-none">
              <p className="font-weight-bold text-dark m-0 mt-2">127 likes</p>
            </a>
          </section>
          <Comment />
          <section>
            <small className="text-muted text-uppercase">5 hours ago</small>
            <hr />
          </section>
          <section id="comment">
            <input className="" type="text" placeholder="Add a comment..." />
          </section>
        </div>
      </div>
    );
  }
}

export default connect(null)(Photo);
