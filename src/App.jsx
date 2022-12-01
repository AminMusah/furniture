import './App.css'
import Home from './components/Home'
import About from './pages/About'
import { Route, Routes, Link } from "react-router-dom"
import Furniture from './pages/Furniture'
import NewArrivals from './pages/NewArrivals'
import Services from './pages/Services'
import Product from './pages/Product'

function App() {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/furniture/product/:id" element={<Product />} />
    </Routes> 
  )
}

export default App
