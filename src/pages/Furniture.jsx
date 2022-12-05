import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

function Furniture() {
  const [tab,setTab] = useState(true)
  const [item,setItem] = useState(false)
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
                <button className={`filter-btn ${tab ? 'active' : ''}`} onClick={(e) => {
                  console.log(e.currentTarget)
                  e.target ? setTab(!tab): '';
                }}>
                  All
                </button>
              </li>

              <li>
                <button className={`filter-btn`}>
                  CUSTOMIZATION
                </button>
              </li>
  
              <li>
                <button className={`filter-btn `}>
                  KITCHEN
                </button>
              </li>
  
              <li>
                <button className={`filter-btn `}>
                  BEDROOM
                </button>
              </li>
  
              <li>
                <button className={`filter-btn`} >
                  OFFICE
                </button>
              </li>
  
              <li>
                <button className={`filter-btn`} >
                  BATHROOM
                </button>
              </li>
            </ul>
  
            <ul className="grid-list">
              <li>
              <Link to='product/7'>
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
              <li>
              <Link to='product/8'>
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
              <Link to='product/9'>
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
              <Link to='product/10'>

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
              <Link to='product/11'>

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
              <Link to='product/12'>
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
              <Link to='product/13'>

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
              <Link to='product/14'>
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
              <li>
              <Link to='product/15'>

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
                </Link >

              </li>
              <li>
              <Link to='product/16'>

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
              <li>
              <Link to='product/17'>

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
              <li>
              <Link to='product/18'>

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
                </Link >
              </li>
              <li>
              <Link to='product/19'>
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
            </ul>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
  
  export default Furniture;
  