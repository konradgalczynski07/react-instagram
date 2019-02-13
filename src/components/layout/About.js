import React, { Component } from 'react';
import Navbar from './navbars/Navbar';
import Footer from './partials/Footer';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="container mt-2 px-0">
          <div className="bg-white border py-3 px-4">
            <h2 className="display-5">About the project</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              praesentium, a porro libero veritatis corrupti optio dignissimos
              explicabo itaque ea deleniti perspiciatis similique suscipit quos
              alias. Quidem doloremque explicabo recusandae earum veritatis
              dignissimos, nam ullam ipsa? Quasi magnam architecto fugit unde.
              Sequi unde, sunt temporibus rem, labore officia, vero odio aut
              dolorem natus ipsa libero nulla iusto aperiam. Porro possimus qui
              eos omnis et neque autem illo vero similique vitae laborum iusto
              pariatur eius ipsa voluptas repellendus, fugiat veniam. Neque
              doloribus quis soluta earum magni, libero exercitationem
              blanditiis cum aperiam perferendis recusandae, cupiditate, eius
              fugit molestias repellendus laboriosam. Vero, hic.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default About;
