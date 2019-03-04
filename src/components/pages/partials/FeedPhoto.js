import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

class FeedPhoto extends Component {
  render() {
    const photos = this.props.photos.map(photo => (
      <div className="card  mb-5">
        <div className="card-header bg-white d-flex align-items-center p-0">
          <Link to={`/profile/${photo.author.username}`} className="my-2 ml-3">
            <img
              className="img-fluid border rounded-circle"
              style={{ width: '40px' }}
              src={photo.author.profile_pic}
              alt=""
            />
          </Link>
          <div className="ml-3">
            <Link
              to={`/profile/${photo.author.username}`}
              className="text-decoration-none"
            >
              <h6 className="font-weight-bold text-dark m-0">
                {photo.author.username}
              </h6>
            </Link>
            <p className="m-0">{photo.location}</p>
          </div>
        </div>
        <img
          className="img-fluid"
          style={{ maxHeight: '700px' }}
          src={photo.photo}
          alt=""
        />
        <div className="card-body">
          <section>
            <i className="far fa-heart fa-2x" />
            <i className="ml-2 far fa-comment fa-2x" />
          </section>
          <section>
            <a href="#" className="text-decoration-none">
              <p className="font-weight-bold text-dark m-0 mt-2">
                {photo.number_of_likes} likes
              </p>
            </a>
          </section>
          <section className="mt-2">
            <section className="mt-2">
              <Link
                to={`/profile/${photo.author.username}`}
                className="text-decoration-none"
              >
                <h6 className="d-inline font-weight-bold text-dark m-0">
                  {photo.author.username}{' '}
                </h6>
              </Link>
              <p className="d-inline">{photo.text}</p>
            </section>
          </section>
          <Comment />
          <section>
            <small className="text-muted text-uppercase">
              <Moment fromNow>{photo.posted_on}</Moment>
            </small>
            <hr />
          </section>
          <section id="comment">
            <input className="" type="text" placeholder="Add a comment..." />
          </section>
        </div>
      </div>
    ));
    return <div>{photos}</div>;
  }
}

export default connect(null)(FeedPhoto);
