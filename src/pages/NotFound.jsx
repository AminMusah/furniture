import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'

const NotFound = () => {
  return (
    <div>
      <Header/>
      <section className="section project" id="project">
        <div className="container">
          <p className="section-subtitle has-before text-center">
            404 not found{" "}
          </p>

          <h2 className="h2 section-title text-center">
            404 <span className="has-before"> not found</span>
          </h2>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default NotFound;
