import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Comment extends Component {
  render() {
    const { comment } = this.props;
    return (
      <section className="mt-2" key={comment.id}>
        <section className="mt-2">
          <Link
            to={`/profile/${comment.author.username}`}
            className="text-decoration-none"
          >
            <h6 className="d-inline font-weight-bold text-dark m-0">
              {comment.author.username}{' '}
            </h6>
          </Link>
          <p className="d-inline">{comment.text}</p>
        </section>
      </section>
    );
  }
}

export default Comment;
