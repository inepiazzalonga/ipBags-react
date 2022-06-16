import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
import { Form } from "../Form/Form";
import bag from "../../assets/bag.png";
import "./Cart.css";

export const Cart = () => {
  const { cartList, deleteCart, deleteItem } = useCartContext();

  const total = cartList.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <>
      <div className="cart-container">
        <div className="cart">
          <h2 className="cartTitle">Tu pedido</h2>

          {cartList.map((product) => (
            <li className="cartItem" key={product.id}>
              <Link to={`/shop/detail/${product.id}`}>
                <img className="img-cart" src={product.img}></img>
              </Link>
              <p>{product.name}</p>
              <p>Precio: ${product.price}</p>
              <p>{product.count}u</p>
              <p>Total: {product.price * product.count}</p>
              <button
                onClick={() => deleteItem(product.id)}
                className="delete-item"
              >
                X
              </button>
            </li>
          ))}

          {cartList.length ? (
            <>
              <div>
                `<h3 className="totalCompra">Total: ${total}</h3>
                <button className="delete-button" onClick={deleteCart}>
                  Vaciar Carrito
                </button>
              </div>

              <Form />
            </>
          ) : (
            <div className="carritoVacio">
              <p>No hay productos en tu carrito</p>
              <Link to={"/shop"}>
                <p>Ir a la tienda</p>
                <img src={bag} />
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
