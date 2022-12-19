import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import products from "../../data";
import Arrivals from "../components/Product";

function Furniture() {
  const [filter, setFilter] = useState(1);

  const toggleFilter = (index) => {
    setFilter(index);
  };

  let bathroom = products.filter((product) => {
    let bath = product.category === "Bathroom";
    if (bath === true) {
      console.log(product.image);
    }
  });

  return (
    <div>
      <Header />
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
            {products.map((product) => {
              return (
                <li
                  className={
                    filter === 1 ? "active-content " : "disable-content"
                  }
                >
                  <Link to={`product/${product.id}`}>
                    <div className="project-card">
                      <figure className="card-banner img-holder">
                        <img
                          src={product.image}
                          width="794"
                          height="637"
                          alt="furniture"
                          className="w-100"
                        />
                      </figure>
                    </div>
                  </Link>
                </li>
              );
            })}

            {products.map((product) => {
              if (product.category === "Kitchen") {
                return (
                  <li
                    className={
                      filter === 2 ? "active-content " : "disable-content"
                    }
                  >
                    <Link to={`product/${product.id}`}>
                      <div className="project-card">
                        <figure className="card-banner img-holder">
                          <img
                            src={product.image}
                            width="794"
                            height="637"
                            alt="furniture"
                            className="w-100"
                          />
                        </figure>
                      </div>
                    </Link>
                  </li>
                );
              }
            })}
            {products.map((product) => {
              if (product.category === "Bedroom") {
                return (
                  <li
                    className={
                      filter === 3 ? "active-content " : "disable-content"
                    }
                  >
                    <Link to={`product/${product.id}`}>
                      <div className="project-card">
                        <figure className="card-banner img-holder">
                          <img
                            src={product.image}
                            width="794"
                            height="637"
                            alt="furniture"
                            className="w-100"
                          />
                        </figure>
                      </div>
                    </Link>
                  </li>
                );
              }
            })}

            {products.map((product) => {
              if (product.category === "Bathroom") {
                return (
                  <li
                    className={
                      filter === 5 ? "active-content " : "disable-content"
                    }
                  >
                    <Link to={`product/${product.id}`}>
                      <div className="project-card">
                        <figure className="card-banner img-holder">
                          <img
                            src={product.image}
                            width="794"
                            height="637"
                            alt="furniture"
                            className="w-100"
                          />
                        </figure>
                      </div>
                    </Link>
                  </li>
                );
              }
            })}
        
           
              {products.map((product) => {
              if (product.category === "Office") {
                return (
                  <li
                    className={
                      filter === 4 ? "active-content " : "disable-content"
                    }
                  >
                    <Link to={`product/${product.id}`}>
                      <div className="project-card">
                        <figure className="card-banner img-holder">
                          <img
                            src={product.image}
                            width="794"
                            height="637"
                            alt="furniture"
                            className="w-100"
                          />
                        </figure>
                      </div>
                    </Link>
                  </li>
                );
              }
            })}

           
          
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Furniture;
