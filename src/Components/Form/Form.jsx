import React from "react";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import swal from "sweetalert";
import "./Form.css";

export const Form = () => {
  const db = getFirestore();
  const { cartList, deleteCart } = useCartContext();
  const total = cartList.reduce(
    (acc, item) => (acc = acc + parseFloat(item.price) * item.count),
    0
  );

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    emailConfirm: "",
    lastName: "",
    adress: "",
    city: "",
  });

  function handleInputChange(e) {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  }

  function newOrder(e) {
    e.preventDefault();
    let order = {};
    if (buyer.email === buyer.emailConfirm) {
      order.buyer = buyer;
      order.date = new Date();
      order.items = cartList.map((item) => {
        const id = item.id;
        const name = item.name;
        const price = item.price;
        const quantity = item.count;

        return { id, name, price, quantity };
      });

      order.total = total;

      const queryCollectionOrders = collection(db, "orders");

      setTimeout(() => {
        addDoc(queryCollectionOrders, order)
          .then((resp) =>
            swal({
              title: "Gracias por su compra " + buyer.name + "!",
              text: "Su código de compra es " + resp.id,
              icon: "success",
            })
          )

          .catch((err) => console.log(err))
          .finally(deleteCart());
      }, 2000);
    } else {
      swal({
        title: "Completa bien los campos",
        icon: "error",
      });
    }
  }

  return (
    <div className="cartInfo">
      <form onSubmit={(e) => newOrder(e)}>
        <input
          type="email"
          required
          placeholder="Mail"
          name="email"
          onChange={handleInputChange}
        />
        <input
          type="email"
          required
          placeholder="Confirme su mail"
          name="emailConfirm"
          onChange={handleInputChange}
        />
        <input
          type="text"
          required
          placeholder="Nombre"
          name="name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          required
          placeholder="Apellido"
          name="lastName"
          onChange={handleInputChange}
        />
        <input
          type="text"
          required
          placeholder="Dirección"
          name="adress"
          onChange={handleInputChange}
        />
        <input
          type="text"
          required
          placeholder="Localidad"
          name="city"
          onChange={handleInputChange}
        />

        <button type="submit">Terminar pedido</button>
      </form>
    </div>
  );
};
