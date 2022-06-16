import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import imgModel from "../../assets/our-world-la-sierra-jewelry.png";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="home">
        <img src={imgModel} alt="" className="modelHome" />
        <div className="goToShop">
          <h2>
            Join our <br /> universe
          </h2>
          <Link to="/shop">
            <button>SHOP NOW</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
