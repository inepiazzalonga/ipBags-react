import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../Assets/fav.png";
import "./NavBar.css";

export const NavBAr = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} className="logoNav" />
      </Link>

      <nav className="navBar">
        <ul>
          <Link to={`/shop/category/carteras`} className="link">
            <li>Carteras</li>
          </Link>
          <Link to={`/shop/category/riñoneras`} className="link">
            <li>Riñoneras</li>
          </Link>
          <Link to={`/shop/category/shopper`} className="link">
            <li>Shopper</li>
          </Link>
          <Link to={`/shop/category/mochilas`} className="link">
            <li>Mochilas</li>
          </Link>
          <Link to={`/shop/category/bandoleras`} className="link">
            <li>Bandoleras</li>
          </Link>
        </ul>

        <Link to={"/shop/cart"}>
          <CartWidget />
        </Link>
      </nav>
    </header>
  );
};
