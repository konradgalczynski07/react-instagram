import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserFeed } from '../../actions/profileActions';
import Spinner from '../common/Spinner';

import FeedNavbar from './navbars/FeedNavbar';
import FeedAside from './partials/FeedAside';
import Photo from './partials/Photo';
import BottomNavbar from './partials/BottomNavbar';

class Feed extends Component {
  componentDidMount() {
    this.props.getUserFeed();
  }

  render() {
    const { feed, loading } = this.props.feed;
    const { user } = this.props.auth;

    let FeedContent;

    return (
      <div>
        <FeedNavbar />
        <section className="container mt-2">
          <div className="row">
            <div className="col-md-8  px-0 px-sm-3">
              <Photo />
            </div>
            <aside className="col-md-4 d-none d-md-block">
              <FeedAside user={user} />
            </aside>
          </div>
          <BottomNavbar />
        </section>
      </div>
    );
  }
}

Feed.propTypes = {
  getUserFeed: PropTypes.func.isRequired,
  feed: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  feed: state.feed,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUserFeed }
)(Feed);
