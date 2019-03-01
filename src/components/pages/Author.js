import React, { Component } from 'react';
import Navbar from './navbars/Navbar';
import Footer from './partials/Footer';
import me from '../../img/me.jpg';

class Author extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="container mt-2 px-0">
          <div className="bg-white border py-3 px-4">
            <div className="row align-items-center">
              <div className="col-sm-5 col-md-4 mb-3">
                <img
                  className="img-fluid border rounded-circle"
                  src={me}
                  alt="Konrad Galczynski - Author"
                />
              </div>
              <div className="col-sm-7 col-md-8">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <h1 className="display-5">Konrad Galczynski</h1>
                  <div className="p-1">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/konradgalczynski07"
                    >
                      <i className="fab fa-github" />
                    </a>
                  </div>
                  <div className="p-1">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/konradgalczynski07/"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="d-flex">Junior Python Developer with React</div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Author;
