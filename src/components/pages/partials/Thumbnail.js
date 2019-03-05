import React, { Component } from 'react';

class Thumbnail extends Component {
  render() {
    const { photo } = this.props;
    return (
      <div class="col-4 p-1">
        <a href="photo.html">
          <img
            class="img-fluid photo"
            src="https://source.unsplash.com/random/400x400"
          />
        </a>
      </div>
    );
  }
}

export default Thumbnail;
