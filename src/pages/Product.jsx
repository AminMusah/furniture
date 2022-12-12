import { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../../data";
import { CartContext } from "../CartContext";
import Header from "../components/Header";
import Footer from '../components/Footer'

function Product({ image, name, price }) {
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
  let itemName = "";
  let itemCategory = "";
  let itemPrice = "";
  let itemImage = "";

  products.find((item) => {
    let product = id == item.id;
    if (product) {
      itemName = item.name;
      itemCategory = item.category;
      itemPrice = item.price;
      itemImage = item.image;
      return;
    }
  });
  return (
    <div>
      <Header/>
      <section className="container product-container">
        <div className="product checkout-wrapper">
          <div className="product-card product-checkout ">
            <figure className="card-banner img-holder ">
              <img
                src={itemImage}
                width="794"
                height="637"
                alt="furniture"
                className="w-100"
              />
            </figure>
          </div>
          <div className="checkout-details">
            <h2 className="text-center">Details</h2>
            <ul  className="checkout-list">
              <li>Item : {itemName}</li>
              <li>Category : {itemCategory}</li>
              <li>Price : {itemPrice}</li>
              <div
                className="add-to-cart-btn "
                onClick={() => addToCart(name, price, image)}
              >
                Add to Cart
              </div>
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Product;
