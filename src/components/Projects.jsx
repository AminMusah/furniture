import { Route, Routes, Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <section class="section project" id="project" aria-label="project">
        <div class="container">
          <p class="section-subtitle has-before text-center">Projects</p>

          <h2 class="h2 section-title text-center">
            Furniture Co. <span class="has-before">projects</span>
          </h2>

          <ul class="filter-list">
            <li>
              <button class="filter-btn active" data-filter-btn>
                CUSTOMIZATION
              </button>
            </li>

            <li>
              <button class="filter-btn" data-filter-btn>
                KITCHEN
              </button>
            </li>

            <li>
              <button class="filter-btn" data-filter-btn>
                BEDROOM
              </button>
            </li>

            <li>
              <button class="filter-btn" data-filter-btn>
                OFFICE
              </button>
            </li>

            <li>
              <button class="filter-btn" data-filter-btn>
                BATHROOM
              </button>
            </li>
          </ul>

          <ul class="grid-list">
            <li>
              <Link to="product/1">
                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serenti20.jpg"
                      width="794"
                      height="637"
                      alt="hero banner"
                      class="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>

            <li>
              <Link to="product/2">
                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serenti35.jpg"
                      width="794"
                      height="637"
                      alt="hero banner"
                      class="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li>
              <Link to="product/3">
                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serinti1.jpg"
                      width="794"
                      height="637"
                      alt="hero banner"
                      class="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li>
              <Link to="product/4">
                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serenti26.jpg"
                      width="794"
                      height="637"
                      alt="hero banner"
                      class="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li>
              <Link to="product/5">
                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serinti11.jpg"
                      width="794"
                      height="637"
                      alt="hero banner"
                      class="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li>
              <Link to="product/5">
                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serinti12.jpg"
                      width="794"
                      height="637"
                      alt="hero banner"
                      class="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li>
              <Link to="product/6">
                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serinti13.jpg"
                      width="794"
                      height="637"
                      alt="hero banner"
                      class="w-100"
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
