import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Furniture() {
    return (
      <div>
        <Header/>
        <section class="section project" id="project" aria-label="project">
          <div class="container">
            <p class="section-subtitle has-before text-center">Furniture</p>
  
            <h2 class="h2 section-title text-center">
              Furniture Co. <span class="has-before">Furnitures</span>
            </h2>
  
            <ul class="filter-list">
              <li>
                <button class="filter-btn active" data-filter-btn>
                  All
                </button>
              </li>

              <li>
                <button class="filter-btn" data-filter-btn>
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
              <Link to='product/7'>
                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serenti20.jpg"
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
              <Link to='product/8'>
                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serenti35.jpg"
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
              <Link to='product/9'>
                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serinti1.jpg"
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
              <Link to='product/10'>

                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serenti26.jpg"
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
              <Link to='product/11'>

                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serinti11.jpg"
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
              <Link to='product/12'>
                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serinti12.jpg"
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
              <Link to='product/13'>

                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serinti13.jpg"
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
              <Link to='product/14'>
                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serenti20.jpg"
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
              <Link to='product/15'>

                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/photo-1600684388091-627109f3cd60.avif"
                      width="794"
                      height="637"
                      alt="furniture"
                      class="w-100"
                    />
                  </figure>
                </div>
                </Link >

              </li>
              <li>
              <Link to='product/16'>

                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/photo-1600566752355-35792bedcfea.avif"
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
              <Link to='product/17'>

                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/photo-1586798271449-9726e2172525.avif"
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
              <Link to='product/18'>

                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/photo-1555041469-a586c61ea9bc.avif"
                      width="794"
                      height="637"
                      alt="furniture"
                      class="w-100"
                    />
                  </figure>
                </div>
                </Link >
              </li>
              <li>
              <Link to='product/19'>
                <div class="project-card">
                  <figure class="card-banner img-holder">
                    <img
                      src="/src/assets/images/serinti4.jpg"
                      width="794"
                      height="637"
                      alt="furniture"
                      class="w-100"
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
  