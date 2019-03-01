import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <ul className="list-inline text-center font-weight-bold m-0">
          <li className="list-inline-item">
            <Link to="about">About Project</Link>
          </li>
          <li className="list-inline-item">
            <Link to="author">Author</Link>
          </li>
          <li className="list-inline-item">
            <Link to="latest">Latest Posts</Link>
          </li>
          <li className="list-inline-item">
            &copy; {new Date().getFullYear()} Konrad Galczynski
          </li>
        </ul>
      </div>
    </footer>
  );
};
