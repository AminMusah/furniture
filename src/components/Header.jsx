import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Menu2LineIcon from "remixicon-react/Menu2LineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            Furniture Co.
          </Link>

          <nav className={`navbar ${openMenu ? "navbar-active" : "navbar"}`}>
            <div className="wrapper">
              <Link to="/" className="logo">
                Furniture Co.
              </Link>

              <button
                className="nav-close-btn"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                <CloseLineIcon />
              </button>
            </div>

            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/" className="navbar-link">
                  Home
                </Link>
              </li>

              <li className="navbar-item">
                <Link to="/services" className="navbar-link">
                  Services
                </Link>
              </li>

              <li className="navbar-item">
                <Link to="/furniture" className="navbar-link">
                  Furniture
                </Link>
              </li>

              <li className="navbar-item">
                <Link to="/new-arrivals" className="navbar-link">
                  New Arrivals
                </Link>
              </li>

              <li className="navbar-item">
                <Link to="/about" className="navbar-link">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="nav-open-btn"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <Menu2LineIcon />{" "}
          </button>

          <Link
            to="/furniture"
            className="btn btn-primary has-before has-after"
          >
            Go Shopping
          </Link>
          {openMenu === true ? <div className="overlay-active overlay"  onClick={() => {
              setOpenMenu(!openMenu);
            }}></div> : ""}
        </div>
      </header>
    </div>
  );
}

export default Header;
