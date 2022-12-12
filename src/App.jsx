import "./App.css";
import Home from "./components/Home";
import About from "./pages/About";
import { Route, Routes, } from "react-router-dom";
import Furniture from "./pages/Furniture";
import NewArrivals from "./pages/NewArrivals";
import Services from "./pages/Services";
import Product from "./pages/Product";
import CartProvider from "./CartContext";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/furniture/product/:id" element={<Product />} />
        <Route path="/new-arrivals/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/not-Found" element={<NotFound />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
