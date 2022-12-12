
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'

function Furniture() {
  const [filter, setFilter] = useState(1);

  const toggleFilter = (index) => {
    setFilter(index);
  };

  return (
    <div>
      <Header/>
      <section className="section project" id="project">
        <div className="container">
          <p className="section-subtitle has-before text-center">Furniture</p>

          <h2 className="h2 section-title text-center">
            Furniture Co. <span className="has-before">Furnitures</span>
          </h2>

          <ul className="filter-list">

            <li>
              <button
                className={
                  filter === 1 ? "filter-btn-active filter-btn " : "filter-btn "
                }
                onClick={() => toggleFilter(1)}
              >
                CUSTOMIZATION
              </button>
            </li>

            <li>
              <button
                className={
                  filter === 2 ? "filter-btn-active filter-btn " : "filter-btn "
                }
                onClick={() => toggleFilter(2)}
              >
                KITCHEN
              </button>
            </li>

            <li>
              <button
                className={
                  filter === 3 ? "filter-btn-active filter-btn " : "filter-btn "
                }
                onClick={() => toggleFilter(3)}
              >
                BEDROOM
              </button>
            </li>

            <li>
              <button
                className={
                  filter === 4 ? "filter-btn-active filter-btn " : "filter-btn "
                }
                onClick={() => toggleFilter(4)}
              >
                OFFICE
              </button>
            </li>

            <li>
              <button
                className={
                  filter === 5 ? "filter-btn-active filter-btn " : "filter-btn "
                }
                onClick={() => toggleFilter(5)}
              >
                BATHROOM
              </button>
            </li>
          </ul>

          <ul className="grid-list">
            <li
              className={filter === 1 ? "active-content " : "disable-content"}
            >
              <Link to="product/7">
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
            
            <li
              className={filter === 1 ? "active-content " : "disable-content"}
            >
              <Link to="product/8">
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
            <li
              className={filter === 1 ? "active-content " : "disable-content"}
            >
              <Link to="product/9">
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
              className={filter === 5 ? "active-content " : "disable-content"}
            >
              <Link to="product/10">
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
              <Link to="product/11">
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
              <Link to="product/12">
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
            <li className={filter === 2 ? "active-content ": "disable-content"}>
              <Link to="product/12">
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
            <li className={filter === 5 ? "active-content ": "disable-content"}>
              <Link to="product/12">
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
            <li className={filter === 3 ? "active-content ": "disable-content"}>
              <Link to="product/13">
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
            <li className={filter === 4 ? "active-content ": "disable-content"}>
              <Link to="product/14">
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
            <li className={filter === 1 ? "active-content ": "disable-content"}>
              <Link to="product/15">
                <div className="project-card">
                  <figure className="card-banner img-holder">
                    <img
                      src="/assets/images/serenti29.jpg"
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
              <Link to="product/16">
                <div class="project-card">
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
            <li className={filter === 5 ? "active-content ": "disable-content"}>
              <Link to="product/17">
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
            <li className={filter === 4 ? "active-content ": "disable-content"}>
              <Link to="product/18">
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
            <li className={filter === 1 ? "active-content ": "disable-content"}>
              <Link to="product/19">
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
            <li className={filter === 2  ? "active-content ": "disable-content"}>
              <Link to="product/19">
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
          </ul>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Furniture;
