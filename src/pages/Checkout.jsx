import { useParams } from "react-router-dom";
import paystackPop from "@paystack/inline-js";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function Product() {
  const { items, total } = useContext(CartContext);
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(total(items));
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const payWithPaystack = (e) => {
    e.preventDefault();
    const payStack = new paystackPop();
    payStack.newTransaction({
      key: "pk_test_26b8ff5d42befde7b35e08f9f379b26ef3e2c1c2",
      firstName,
      lastName,
      amount: amount * 100,
      email,
      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
        setAmount("");
        setEmail("");
        setFirstName("");
        setLastName("");
      },
      onCancel() {
        alert(`You have canceled your transaction!`);
      },
    });
  };

  return (
    <div>
      <Header />
      <section className="section project" id="project">
        <p className="section-subtitle has-before text-center">Checkout</p>

        <h2 className="h2 section-title text-center">
          <span className="has-before">Payment</span>
        </h2>
        <section className="container product-container">
          <form action="" className="product-form">
            <ul>
              <li>
                <label>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </li>
              <li>
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </li>
              <li>
                <label>Amount</label>
                <input
                  type="tel"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </li>
              <li>
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </li>
              <li>
                <button
                  type="submit"
                  onClick={payWithPaystack}
                  className="btn btn-secondary"
                >
                  Submit
                </button>
              </li>
            </ul>
          </form>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default Product;
