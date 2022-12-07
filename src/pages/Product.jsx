import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import { useState } from "react";

function Product() {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const payWithPaystack = (e) => {
    e.preventDefault();
    const payStack = new PaystackPop();
    payStack.newTransaction({
      key: "pk_test_26b8ff5d42befde7b35e08f9f379b26ef3e2c1c2",
      amount: amount * 100,
      email,
      firstName,
      lastName,
      onSuccess(transaction){
        let message = `Payment Complete! Reference ${transaction.reference}`
        alert(message)
        setAmount("")
        setEmail("")
        setFirstName("")
        setLastName("")
      },
      onCancel(){
alert(`You have canceled your transaction!`)
      }
    });
  };

  return (
    <div>
      <Header />
      <section className="container product-container">
        <div className="product">
          <div className="product-card">
            <figure className="card-banner img-holder">
              <img
                src="/assets/images/serenti20.jpg"
                width="794"
                height="637"
                alt="furniture"
                className="w-100"
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
          <h1>Make Payment</h1>
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

      <Footer />
    </div>
  );
}

export default Product;
