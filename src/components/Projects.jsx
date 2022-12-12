import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

function Projects() {
  const [filter,setFilter] = useState(1)

  const toggleFilter = (index) => {
    setFilter(index)
  }
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
              <button className={filter === 1 ? "filter-btn-active filter-btn ": "filter-btn "} onClick={()=>toggleFilter(1)}>
                CUSTOMIZATION
              </button>
            </li>

            <li>
              <button className={filter === 2 ? "filter-btn-active filter-btn ": "filter-btn "} onClick={()=>toggleFilter(2)}>
                KITCHEN
              </button>
            </li>

            <li>
              <button className={filter === 3 ? "filter-btn-active filter-btn ": "filter-btn "} onClick={()=>toggleFilter(3)}>
                BEDROOM
              </button>
            </li>

            <li>
              <button className={filter === 4 ? "filter-btn-active filter-btn ": "filter-btn "} onClick={()=>toggleFilter(4)}>
                OFFICE
              </button>
            </li>

            <li>
              <button className={filter === 5 ? "filter-btn-active filter-btn ": "filter-btn "} onClick={()=>toggleFilter(5)}>
                BATHROOM
              </button>
            </li>
          </ul>

          <ul className="grid-list" >
            <li className={filter === 1 ? "active-content ": "disable-content"}>
              <Link to="/furniture">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serenti20.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>

            <li className={filter === 5 ? "active-content ": "disable-content"}>
              <Link to="/furniture">
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
            <li className={filter === 1 ? "active-content ": "disable-content"}>
              <Link to="/furniture">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serenti30.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li
              className={filter === 1 ? "active-content " : "disable-content"}
            >
              <Link to="/furniture">
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
            <li
              className={filter === 1 ? "active-content " : "disable-content"}
            >
              <Link to="/furniture">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serinti2.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            {/* <li className={filter === 1 ? "active-content ": "disable-content"}>
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
            </li> */}
            <li className={filter === 5 ? "active-content ": "disable-content"}>
              <Link to="/furniture">
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
            <li className={filter === 1 ? "active-content ": "disable-content"}>
              <Link to="/furniture">
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
            <li className={filter === 1 ? "active-content ": "disable-content"}>
              <Link to="/furniture">
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
            <li className={filter === 3 ? "active-content ": "disable-content"}>
              <Link to="/furniture">
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
            <li className={filter === 2 ? "active-content ": "disable-content"}>
              <Link to="/furniture">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serenti21.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li className={filter === 2 ? "active-content ": "disable-content"}>
              <Link to="/furniture">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serenti30.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li className={filter === 2 ? "active-content ": "disable-content"}>
              <Link to="/furniture">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/photo_6034830961490902259_y.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li className={filter === 4 ? "active-content ": "disable-content"}>
              <Link to="/furniture">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serenti27.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li className={filter === 3 ? "active-content ": "disable-content"}>
              <Link to="/furniture">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serenti36.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      className="w-100"
                    />
                  </figure>
                </div>
              </Link>
            </li>
            <li className={filter === 4 ? "active-content ": "disable-content"}>
              <Link to="/furniture">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serinti16.jpg"
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
