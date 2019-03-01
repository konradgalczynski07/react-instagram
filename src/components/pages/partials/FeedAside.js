import React from 'react';
import { Link } from 'react-router-dom';

export default function FeedAside(props) {
  return (
    <div className="aside-info">
      <div className="d-flex align-items-center mb-3">
        <Link to="/profile">
          <img
            className="img-fluid border rounded-circle"
            style={{ width: '50px' }}
            src={props.user.profile_pic}
            alt=" "
          />
        </Link>
        <div className="flex-row ml-3">
          <Link to="/profile" className="text-decoration-none">
            <h6 className="font-weight-bold text-dark m-0">
              {props.user.username}
            </h6>
          </Link>
          <small className="text-muted">{props.user.fullname}</small>
        </div>
      </div>
      <div className="bg-white border rounded py-3 px-4">
        <p className="lead text-muted">Suggestions for you</p>
        <p>Comming soon</p>
      </div>

      <footer className="text-muted mt-3">
        <small>
          <Link to="/about" className="text-muted text-decoration-none">
            About Project
          </Link>{' '}
          &bull;{' '}
        </small>
        <small>
          <Link to="/author" className="text-muted text-decoration-none">
            Author
          </Link>{' '}
          &bull;{' '}
        </small>
        <small>
          <Link to="/latest" className="text-muted text-decoration-none">
            Latest Posts
          </Link>
        </small>
        <small className="d-block">
          &copy; {new Date().getFullYear()} Konrad Galczynski
        </small>
      </footer>
    </div>
  );
}
