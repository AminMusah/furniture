import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
      <Header/>
      <section className="section about bg" id="about">
        <div className="container">
          <div className="about-content">
            <p
              className="section-subtitle reveal-left text-color"
              id="about-label"
            >
              About Us
            </p>

            <h2 className="h2 section-title reveal-left text-color">
              Furniture Co.
            </h2>

            <p className="section-text reveal-left text-color">
              Furniture Co. is a service provider within the Furniture and
              interior design space. At Furniture Co., we provide high-quality
              furniture and ensure that each piece of furniture meets the
              highest standards of quality and craftsmanship.
            </p>
          </div>

          <figure className="about-banner">
            <img
              src="/assets/images/serenti25.jpg"
              width="794"
              height="637"
              alt="furniture"
              className="w-100"
            />
          </figure>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default About;
