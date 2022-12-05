import { Route, Routes, Link } from "react-router-dom"
import CollageLineIcon from 'remixicon-react/CollageLineIcon'

function Hero() {
  return (
    <div>
      
      <section className="section hero" id="home" aria-label="hero">
      {/* <div className="banner" backgroundImage="/src/assets/images/serenti25.jpg">
          </div> */}
        <div className="container">
         
          <div className="hero-content">
            <h1 className="h1 hero-title">
              Building <span class="has-before">Office and Home</span> Products.
            </h1>

            <p className="hero-text">
              At Furnituire Co. we specialize in designing, building, shipping and
              scaling beautiful and quality products available. 
            </p>

            <div className="wrapper">
              <Link to="/new-arrivals" className="btn btn-primary has-before has-after">
              New Arrivals
              </Link>

              <Link to='/services' className="hero-btn">
                <CollageLineIcon/>

                <span className="span">  Smart Space Solution</span>
              </Link>
            </div>

            
          </div>

          <figure className="hero-banner">
            <img
          src="/assets/images/serinti11.jpg"
          width="794" height="637" alt="hero banner" class="w-100"
        />
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Hero;
