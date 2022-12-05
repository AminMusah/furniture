import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <section className="container product-container">
        <div class="product">
            <div class="product-card">
              <figure class="card-banner img-holder">
                <img
                  src="/assets/images/serenti20.jpg"
                  width="794"
                  height="637"
                  alt="furniture"
                  class="w-100"
                />
              </figure>
            </div>
            <div>
              <h2 className="h3 section-title text-center">
                Item id :{id} <span className="has-before">Details</span>
              </h2>
             <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor sit.</li>
             </ul>
            </div>
        </div>
        <form action="" className="product-form">
          
          <ul class="flex-outer">
            <li>
              <label for="first-name">Name</label>
              <input type="text" />
            </li>
            <li>
              <label for="last-name">Amount</label>
              <input type="tel" />
            </li>
            <li>
              <label for="email">Email</label>
              <input type="text" />
            </li>
            <li>
              <label for="phone">Phone</label>
              <input type="text" />
            </li>
            <li>
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </li>
          </ul>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Product;
