import RocketLineIcon from 'remixicon-react/Rocket2LineIcon'
import GroupFillIcon from 'remixicon-react/GroupFillIcon'
import CustomerServiceFillIcon from 'remixicon-react/CustomerServiceFillIcon'
function Features() {
  return (
    <div>
      <section className="section feature" id="feature" >
        <div className="container">
          <figure className="feature-banner">
            <img
              src="/assets/images/serinti4.jpg"
              width="794"
              height="637"
              alt="hero banner"
              class="w-100"
            />
          </figure>
          <div className="feature-content">
            <p className="section-subtitle has-before">Why Choose us</p>

            <h2 className="h2 section-title">
              Furniture Co. is committed to providing its clients with the best
              possible products and services.
            </h2>

            <ul className="feature-list">
              <li>
                <div className="feature-card">
                  <div className="card-icon">
                    <RocketLineIcon />
                  </div>

                  <div>
                    <h3 className="h3 card-title">Fast working process</h3>

                    <p className="card-text">
                      At Furniture Co we specialize in designing, building,
                      shipping and scaling beautiful Products.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="feature-card">
                  <div className="card-icon">
                    <GroupFillIcon/>
                  </div>

                  <div>
                    <h3 className="h3 card-title">Didicated team</h3>

                    <p className="card-text">
                      A dedicated team of experts who
                      work together to create high-quality furniture. This team
                      is responsible for every aspect of the furniture-making
                      process, from design and development to manufacturing and
                      delivery. By working together, the team can ensure that
                      each piece of furniture meets the highest standards of
                      quality and craftsmanship.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="feature-card">
                  <div className="card-icon">
                    <CustomerServiceFillIcon/>
                  </div>

                  <div>
                    <h3 className="h3 card-title">Personalized Services</h3>

                    <p className="card-text">
                      We provide office refurbishment services and specialize in
                      partitioning, office furnishings, and fittings. We have a
                      wide range of options to choose from so that you can find
                      the perfect solution for your office space.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
