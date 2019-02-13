import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Navbar from './navbars/Navbar';
import FeedAside from './partials/FeedAside';
import Photo from './partials/Photo';
import BottomNavbar from './partials/BottomNavbar';

class Feed extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <Navbar />
        <section class="container mt-2">
          <div class="row">
            <div class="col-md-8  px-0 px-sm-3">
              <Photo />
            </div>
            <aside class="col-md-4 d-none d-md-block">
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
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Feed);
