import { Route, Routes, Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <section className="section project" id="project">
        <div className="container">
          <p className="section-subtitle has-before text-center">Projects</p>

          <h2 className="h2 section-title text-center">
            Furniture Co. <span className="has-before">projects</span>
          </h2>

          <ul className="filter-list">
            <li>
              <button className="filter-btn active">
                CUSTOMIZATION
              </button>
            </li>

            <li>
              <button className="filter-btn">
                KITCHEN
              </button>
            </li>

            <li>
              <button className="filter-btn" >
                BEDROOM
              </button>
            </li>

            <li>
              <button className="filter-btn" >
                OFFICE
              </button>
            </li>

            <li>
              <button className="filter-btn" >
                BATHROOM
              </button>
            </li>
          </ul>

          <ul className="grid-list">
            <li>
              <Link to="product/1">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serenti20.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      class="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>

            <li>
              <Link to="product/2">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serenti35.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li>
              <Link to="product/3">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serinti1.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li>
              <Link to="product/4">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serenti26.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li>
              <Link to="product/5">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serinti11.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li>
              <Link to="product/5">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serinti12.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li>
              <Link to="product/6">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serinti13.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li>
              <Link to="product/16">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serenti25.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Projects;
