import { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import products from "../../data";
import { CartContext } from "../CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Product({}) {
  const { addToCart } = useContext(CartContext);
  const [color, setColor] = useState("add-to-cart-btn");
  const [add, setAdd] = useState("Add to Cart");
  const [bg1, setBg1] = useState(false);
  const [bg2, setBg2] = useState(false);
  const [bg3, setBg3] = useState(false);
  const [bg4, setBg4] = useState(false);

  const changeBg1 = () => {
    setBg1(!bg1);
    setBg2(false);
    setBg3(false);
    setBg4(false);
    console.log("click");
  };

  const changeBg2 = () => {
    setBg2(!bg2);
    setBg1(false);
    setBg3(false);
    setBg4(false);
    console.log("click");
  };

  const changeBg3 = () => {
    setBg3(!bg3);
    setBg1(false);
    setBg2(false);
    setBg4(false);
    console.log("click");
  };

  const changeBg4 = () => {
    setBg4(!bg4);
    setBg2(false);
    setBg1(false);
    setBg3(false);
    console.log("click");
  };

  const alert = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Added to Cart",
    });
  };

  const addItem = () => {
    addToCart(itemName, itemPrice, itemImage, id);
    setColor("added-to-cart");
    setAdd("Added to Cart");
    alert();
  };

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
      console.log(itemPrice, "price");
      return;
    }
  });
  return (
    <div>
      <Header />
      <section className="container product-container">
        <div className="product checkout-wrapper">
          <div className="product-card product-checkout">
            <figure className="card-banner holder-img">
              <img
                src={itemImage}
                width="794"
                height="637"
                alt="furniture"
                className="w-100"
              />
            </figure>
            {bg1 ? <div className="color1"></div> : ""}
            {bg2 ? <div className="color2"></div> : ""}
            {bg3 ? <div className="color3"></div> : ""}
            {bg4 ? <div className="color4"></div> : ""}

            <div className="product-nav">
              <section>
                <div onClick={changeBg1} style={{ "--color": "#df9fdf" }}></div>
                <div onClick={changeBg2} style={{ "--color": "#9fbfdf" }}></div>
                <div onClick={changeBg3} style={{ "--color": "#9fdf9f" }}></div>
                <div onClick={changeBg4} style={{ "--color": "#dfbf9f" }}></div>
              </section>
            </div>
          </div>

          <div className="checkout-details">
            <h2 className="text-center"> {itemName}</h2>
            <ul className="checkout-list">
              <li>
                Material: Tabletop: Medium density fibreboard (MDF)
                Natural/untreated, Glass Toughened safety glass Laminated, Legs:
                Steel powder-coated, Foot: Steel chromed, Delivery Knocked-down,
                Maintenance and Cleaning: Art. No. 25002 Furniture Cleaner.
              </li>
              <li> Measures (H/W/D): 75 x 90 x 180 centimeters</li>
              <li> Weight: 68.55 kg</li>
              <li>Category : {itemCategory}</li>
              <li>Price :₵{itemPrice}</li>
              <div className={color} onClick={addItem}>
                {add}
              </div>
            </ul>
          </div>
        </div>
        <ul className="gallery-list">
          <li>
            <p className="">Gallery</p>
          </li>

          <li>
            <ul className="gallery-grid-list">
              {/* <Link to={`product`}> */}
                <li>
                  <div className="gallery-item">
                    <img
                      src="/assets/images/serenti25.jpg"
                      width="80"
                      height="80"
                      loading="lazy"
                      alt="Gallery"
                      className="w-100"
                    />
                  </div>
                </li>
              {/* </Link> */}

              <li>
                <div className="gallery-item">
                  <img
                    src="/assets/images/serenti26.jpg"
                    width="80"
                    height="80"
                    loading="lazy"
                    alt="Gallery"
                    className="w-100"
                  />
                </div>
              </li>

              <li>
                <div className="gallery-item">
                  <img
                    src="/assets/images/serenti20.jpg"
                    width="80"
                    height="80"
                    loading="lazy"
                    alt="Gallery"
                    className="w-100"
                  />
                </div>
              </li>

              <li>
                <div className="gallery-item">
                  <img
                    src="/assets/images/serenti30.jpg"
                    width="80"
                    height="80"
                    loading="lazy"
                    alt="Gallery"
                    className="w-100"
                  />
                </div>
              </li>

              <li>
                <div className="gallery-item">
                  <img
                    src="/assets/images/serenti29.jpg"
                    width="80"
                    height="80"
                    loading="lazy"
                    alt="Gallery"
                    className="w-100"
                  />
                </div>
              </li>

              <li>
                <div className="gallery-item">
                  <img
                    src="/assets/images/serenti36.jpg"
                    width="80"
                    height="80"
                    loading="lazy"
                    alt="Gallery"
                    className="w-100"
                  />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default Product;
