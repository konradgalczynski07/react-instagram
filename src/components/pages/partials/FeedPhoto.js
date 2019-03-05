import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { addComment, toggleLike } from '../../../actions/postActions';
import Comment from './Comment';

class FeedPhoto extends Component {
  constructor() {
    super();
    this.state = {
      comment: ''
    };
    this.commentRef = React.createRef();
  }

  onLikeClick = postId => e => {
    e.preventDefault();

    this.props.toggleLike(postId);
  };

  onCommentClick = () => {
    this.commentRef.current.focus();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = postId => e => {
    e.preventDefault();

    const commentData = {
      text: this.state.comment
    };

    this.props.addComment(postId, commentData);

    this.setState({ comment: '' });
  };

  render() {
    const { photo } = this.props;
    return (
      <div className="card  mb-5" key={photo.id}>
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

          {/* const { auth } = this.props; */}
          {/* onDeleteClick = postId => {
              this.props.deletePost(postId);
            }; */}
          {/* {photo.author.username === auth.user.username ? (
            <div className="dropdown ml-auto mr-3">
            <i
              class="fas fa-ellipsis-v"
              id="dropdownMenuButton"
              data-toggle="dropdown"
            />
            <div class="dropdown-menu dropdown-menu-right">
              <button
                className="btn dropdown-item m-0 p-0"
                onClick={this.onDeleteClick(photo.id)}
              >
                <p className="m-1 text-center">
                  <i class="far fa-trash-alt" /> Delete
                </p>
              </button>
            </div>
          </div>
          ) : null} */}
        </div>
        <img
          className="img-fluid"
          style={{ maxHeight: '700px' }}
          src={photo.photo}
          alt=""
        />
        <div className="card-body">
          <section>
            <button className="btn p-0" onClick={this.onLikeClick(photo.id)}>
              {photo.liked_by_req_user ? (
                <i class="fas fa-heart fa-2x" style={{ color: 'red' }} />
              ) : (
                <i className="far fa-heart fa-2x" />
              )}
            </button>
            <button className="btn p-0" onClick={this.onCommentClick}>
              <i className="ml-2 far fa-comment fa-2x" />
            </button>
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

          {photo.post_comments.map(comment => (
            <Comment comment={comment} />
          ))}

          <section>
            <small className="text-muted text-uppercase">
              <Moment fromNow>{photo.posted_on}</Moment>
            </small>
            <hr />
          </section>
          <section id="comment">
            <form onSubmit={this.onSubmit(photo.id)}>
              <input
                type="text"
                name="comment"
                value={this.state.comment}
                placeholder="Add a comment..."
                ref={this.commentRef}
                onChange={this.onChange}
              />
            </form>
          </section>
        </div>
      </div>
    );
  }
}

FeedPhoto.propTypes = {
  photo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addComment, toggleLike }
)(FeedPhoto);
