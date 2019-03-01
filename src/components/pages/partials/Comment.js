import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Comment extends Component {
  render() {
    return (
      <section className="mt-2">
        <section className="mt-2">
          <Link to="/profile" className="text-decoration-none">
            <h6 className="d-inline font-weight-bold text-dark m-0">
              wikaaaaa{' '}
            </h6>
          </Link>
          <p className="d-inline">Super zdjecie !</p>
        </section>
      </section>
    );
  }
}

export default Comment;
