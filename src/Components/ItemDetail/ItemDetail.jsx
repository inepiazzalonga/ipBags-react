import React, { useState } from "react";
import { BuyButton } from "../BuyButton/BuyButton";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ product }) => {
  const [inputType, setInputType] = useState("itemCount");
  const { addToCart } = useCartContext();

  function handleInputType() {
    setInputType("buyButtons");
  }

  const onAdd = (count) => {
    addToCart({ ...product, count: count });
    handleInputType();
  };

  return (
    <>
      <Link to="/shop" className="link">
        <p className="verTodo">Ver todo</p>
      </Link>
      <div className="itemDetail">
        <div className="detailImg">
          <img className="item_det_img" src={product.img} alt="" />
        </div>
        <div className="detailInfo">
          <h3 className="item_title">{`Producto: ${product.name}`}</h3>
          <p>Descripción: {`${product.description}`}</p>
          <p className="item_price">{`Precio: $ ${product.price}`}</p>
          {inputType === "itemCount" ? (
            <ItemCount
              initial={1}
              stock={5}
              onAdd={onAdd}
              handleInputType={handleInputType}
            />
          ) : (
            <BuyButton />
          )}
        </div>
      </div>
    </>
  );
};
