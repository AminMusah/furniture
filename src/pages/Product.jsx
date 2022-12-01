import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

function About() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <ul class="product">
        <li>
          <div class="product-card">
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
          <p>
          {id}. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, dolores. Libero, veniam. Maiores totam ad delectus
            minima cum. Quae non amet rem corporis ipsa cumque. Eos consectetur
            facilis laboriosam consequuntur? 
            
          </p>
        </li>
      </ul>
      <Footer />
    </div>
  );
}

export default About;
