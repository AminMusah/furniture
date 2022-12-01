import { Route, Routes, Link } from "react-router-dom"


function Hero() {
  return (
    <div>
      
      <section class="section hero" id="home" aria-label="hero">
      {/* <div className="banner" backgroundImage="/src/assets/images/serenti25.jpg">
          </div> */}
        <div class="container">
         
          <div class="hero-content">
            <h1 class="h1 hero-title">
              Building <span class="has-before">Office and Home</span> Products.
            </h1>

            <p class="hero-text">
              At Furnituire Co. we specialize in designing, building, shipping and
              scaling beautiful and quality products available. 
            </p>

            <div class="wrapper">
              <Link to="/new-arrivals" class="btn btn-primary has-before has-after">
              New Arrivals
              </Link>

              <button class="hero-btn" aria-label="pixology promo">
                <ion-icon name="play-outline" aria-hidden="true"></ion-icon>

                <span class="span">  Smart Space Solution</span>
              </button>
            </div>
          </div>

          <figure class="hero-banner">
            <img
          src="/src/assets/images/serinti11.jpg"
          width="794" height="637" alt="hero banner" class="w-100"
        />
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Hero;
