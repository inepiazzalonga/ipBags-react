import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  function contadorMas() {
    count < stock ? setCount(count + 1) : alert("No hay mas stock");
  }

  function contadorMenos() {
    count > initial ? setCount(count - 1) : alert("El carrito está vacío");
  }

  return (
    <>
      <div className="itemCount">
        <div className="sumaResta">
          <button onClick={contadorMenos}>-</button>
          <p>{count}</p>
          <button onClick={contadorMas}>+</button>
        </div>
        <div className="containerBotonCarrito">
          <button className="botonCarrito" onClick={() => onAdd(count)}>
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemCount;
