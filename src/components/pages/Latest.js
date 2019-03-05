import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLatestPosts } from '../../actions/feedActions';
import Spinner from '../common/Spinner';
import Navbar from './navbars/Navbar';
import Footer from './partials/Footer';
import Thumbnail from './partials/Thumbnail';

class Latest extends Component {
  componentDidMount() {
    this.props.getLatestPosts();
  }

  render() {
    const { feed, loading } = this.props.feed;
    const { photos } = this.props.feed.results;

    let latestContent;
    if (feed === null || loading) {
      latestContent = <Spinner />;
    } else {
      if (feed.count > 0) {
        latestContent = photos.map(photo => <Thumbnail photo={photo} />);
      } else {
        latestContent = (
          <div>
            <p>No photos.</p>
          </div>
        );
      }
    }

    return (
      <div>
        <Navbar />
        <section class="container mt-2 px-0">
          <div class="row no-gutters">{latestContent}</div>
        </section>
        <Footer />
      </div>
    );
  }
}

Latest.propTypes = {
  getLatestPosts: PropTypes.func.isRequired,
  feed: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  feed: state.feed
});

export default connect(
  mapStateToProps,
  { getLatestPosts }
)(Latest);
