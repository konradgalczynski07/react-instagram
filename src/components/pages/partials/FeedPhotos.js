import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedPhoto from './FeedPhoto';

class FeedPhotos extends Component {
  render() {
    const { photos } = this.props;

    return photos.map(photo => <FeedPhoto photo={photo} />);
  }
}

FeedPhotos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default FeedPhotos;
