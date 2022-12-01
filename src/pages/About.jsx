import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Header />
      <section class="section about bg" id="about">
        <div class="container">
          <div class="about-content">
            <p
              class="section-subtitle reveal-left text-color"
              id="about-label"
              data-reveal
            >
              About Us
            </p>

            <h2 class="h2 section-title reveal-left text-color">
              Furniture Co.
            </h2>

            <p class="section-text reveal-left text-color">
              Furniture Co. is a service provider within the Furniture and
              interior design space. At Furniture Co., we provide high-quality
              furniture and ensure that each piece of furniture meets the
              highest standards of quality and craftsmanship.
            </p>
          </div>

          <figure class="about-banner">
            <img
              src="/src/assets/images/serenti25.jpg"
              width="794"
              height="637"
              alt="furniture"
              class="w-100"
            />
          </figure>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
