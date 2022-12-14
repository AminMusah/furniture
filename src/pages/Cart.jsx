import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import ArrowDropLeftLineIcon from "remixicon-react/ArrowDropLeftLineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Swal from 'sweetalert2'


function Cart() {
  const { items, clearCart, clearItem, total } = useContext(CartContext);

  const clearAlert = ()=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Cart Empty'
    })
  }
  const removeItem = ()=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Item removed'
    })
  }

  const emptyCart = ()=>{
    clearCart()
    clearAlert()
  }

  return (
    <div>
      <Header/>
      <section className="section project" id="project">
        <div className="container">
        <p className="section-subtitle has-before text-center">Cart</p>

        <h2 className="h2 section-title text-center">
          Shopping <span className="has-before">Cart</span>
        </h2>
        <div className="cart">
          <div className=" empty-cart">
            {items.map((item) => {
              return (
                <div className="cart-item" key={item.id}>
                  <figure className="cart-banner">
                    <img
                      src={item.image}
                      alt="Recent Commercial Real Estate Transactions"
                      className="w-100"
                    />
                  </figure>
                  <div className="cart-items" >
                  <ul className="cart-item-info">
                    <h2>Details</h2>
                    <li>{item.name}</li>
                    <li>Item Id: {item.id}</li>
                  </ul>
                  <div className="cart-price">
                    <h2>Price </h2>???{item.price}
                  </div>
                  </div>
                
                  <div
                    className="remove-btn"
                    onClick={() =>
                      removeItem(clearItem(item.id))}
                  >
                    <CloseLineIcon />
                  </div>
                </div>
              );
            })}
            {items.length > 0 ? (
              <button
                className="btn btn-primary has-before has-after clear-cart"
                onClick={emptyCart}
              >
                Clear Cart
              </button>
            ) : (
              <div className="container">
                <h2 className="h2 section-title text-center">
                  Empty <span className="has-before">Cart</span>
                </h2>
                <Link
                  to="/new-arrivals"
                  className="btn btn-primary has-before has-after"
                >
                  <ArrowDropLeftLineIcon /> Go Shopping
                </Link>
              </div>
            )}
          </div>
          {items.length > 0 ? (
            <div className="subtotal-container">
              <div className="subtotal">
                <p>Subtotal</p>
                {/* <span>???{subtotal}</span> */}
                <span>???{total(items)}</span>
              </div>
              <p>Taxes and delivery calculated at checkout</p>
              <Link
                to="/checkout"
                className="btn btn-secondary has-before has-after"
              >
                Check out
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Cart;
