import React from "react";
import { useCartContext } from "../../context/CartContext";
import Cart from "../../assets/carrito.gif";
import "./CartWidget.css";

export const CartWidget = () => {
  const { cartList } = useCartContext();

  const totalItems = cartList.reduce(
    (acc, item) => (acc = acc + item.count),
    0
  );

  return (
    <>
      <div>
        <img src={Cart} className="carrito" />
        <button className="totalItems">{totalItems}</button>
      </div>
    </>
  );
};
