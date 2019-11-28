import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddNavbar from './navbars/AddNavbar';
import { addPhoto } from '../../actions/postActions';

class AddPhoto extends Component {
  constructor() {
    super();
    this.state = {
      photo: '',
      text: '',
      location: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFileChange = e => {
    this.setState({ photo: e.target.files[0] });
  };

  onSubmit = e => {
    e.preventDefault();

    const photoData = new FormData();
    photoData.append('photo', this.state.photo);
    photoData.append('text', this.state.text);
    photoData.append('location', this.state.location);

    this.props.addPhoto(photoData, this.props.history);
  };

  render() {
    return (
      <div>
        <AddNavbar />
        <section className="container">
          <div className="row no-gutters">
            <div className="col">
              <form onSubmit={this.onSubmit} encType="multipart/form-data">
                <div className="form-group mb-3">
                  <input
                    className="form-control-file"
                    type="file"
                    name="photo"
                    onChange={this.onFileChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="text"
                    placeholder="Write a caption..."
                    value={this.state.text}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="location"
                    placeholder="Add location..."
                    value={this.state.location}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  className="btn btn-primary float-right"
                  type="submit"
                  value="Add"
                />
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

AddPhoto.propTypes = {
  addPhoto: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addPhoto }
)(AddPhoto);
