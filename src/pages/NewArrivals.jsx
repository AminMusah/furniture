
import Arrivals from "../components/Product";
import products from "../../data";
import Header from '../components/Header'
import Footer from '../components/Footer'

function NewArrivals() {
  return (
    <div>
      <Header/>
      <section className="section project" id="project">
          <p className="section-subtitle has-before text-center">New Arrivals</p>

          <h2 className="h2 section-title text-center">
            Furniture Co. <span className="has-before">Latest</span>
          </h2>
          <div className="arrival-content">
            {products.map((products) => (
              <Arrivals image={products.image} name={products.name} price={products.price} id={products.id}/>
            ))}
          </div>
          <Footer/>
      </section>
    </div>
  );
}

export default NewArrivals;
