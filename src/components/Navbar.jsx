import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Test token</h2>

      <div className="navbar__list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Liquidity">Liquidity</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
