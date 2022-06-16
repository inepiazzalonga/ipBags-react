import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import errorGif from "../../assets/animation_500_l4d6k48f.gif";
import "./Error.css";

export const Error404 = () => {
  return (
    <>
      <div className="error">
        <img src={errorGif} alt="" />
        <h3>Oops! No encontramos lo que estás buscando</h3>
        <Link to="/shop" className="link">
          <p>Volver</p>
        </Link>
      </div>
      <Footer />
    </>
  );
};
