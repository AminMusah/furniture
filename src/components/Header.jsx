import { Route, Routes, Link } from "react-router-dom"


function Header() {
  return (
    <div>
      <header class="header">
    <div class="container">

      <Link to="/" class="logo">Furniture Co.</Link>

      <nav class="navbar">

        <div class="wrapper">
        <Link to="/" class="logo">Furniture Co.</Link>

          <button class="nav-close-btn" aria-label="close menu">
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <ul class="navbar-list">

          <li class="navbar-item">
            <Link to="/" class="navbar-link" >Home</Link>
          </li>

          <li class="navbar-item">
            <Link to="/services" class="navbar-link" >Services</Link>
          </li>

          <li class="navbar-item">
            <Link to="/furniture" class="navbar-link">Furniture</Link>
          </li>

          <li class="navbar-item">
            <Link to="/new-arrivals" class="navbar-link">New Arrivals</Link>
          </li>

          <li class="navbar-item">
            <Link to="/about" class="navbar-link" >About Us</Link>
          </li>

        </ul>

      </nav>

      <button class="nav-open-btn">
        <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
      </button>

      <Link to="/furniture" class="btn btn-primary has-before has-after">Go Shopping</Link>

      <div class="overlay" data-nav-toggler data-overlay></div>

    </div>
  </header>
     
    </div>
  )
}

export default Header
