import Header from '../components/Header'
import Footer from '../components/Footer'


function Services() {
  return (
    <div>
      <Header/>
      <ul className="service-list">
        <li>
          <div className="service-card">
            <div className="card-icon">
              <img
                src="/assets/images/serenti25.jpg"
                width="794"
                height="637"
                alt="furniture"
                className="w-100"
              />{" "}
            </div>

            <div>
              <h3 className="h3 card-title">CUSTOMIZED FURNITURE</h3>

              <p className="card-text">
                We offer one to one appointments where we bring your dreams to
                life with on the spot rendering and quotations
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="service-card">
            <div className="card-icon">
              <img
                src="/assets/images/serinti1.jpg"
                width="794"
                height="637"
                alt="furniture"
                className="w-100"
              />{" "}
            </div>

            <div>
              <h3 className="h3 card-title"> PERSONALIZED SERVICES</h3>

              <p className="card-text">
                We are specialists in office refurbishment and provide a wide
                range of partitioning, office furnishings, fittings and more
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="service-card">
            <div className="card-icon">
              <img
                src="/assets/images/serinti13.jpg"
                width="794"
                height="637"
                alt="furniture"
                className="w-100"
              />{" "}
            </div>

            <div>
              <h3 className="h3 card-title">HIGH SKILLED INTERIOR DESIGN</h3>

              <p className="card-text">
                We provide you with quality service and advice on creating your
                own personal living environment
              </p>
            </div>
          </div>
        </li>
      </ul>
      <Footer/>
    </div>
  );
}

export default Services;
