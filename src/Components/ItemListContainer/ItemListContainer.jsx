import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { Loader } from "../Loader/Loader";
import { Footer } from "../Footer/Footer";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

export default function ItemListContainer({ greeting = "Shop" }) {
  const [productsList, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");

    if (!category) {
      getDocs(queryCollection)
        .then((resp) =>
          setProducts(
            resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((error) => error)
        .finally(() => setLoader(false));
    } else {
      const queryCollectionFilter = query(
        queryCollection,
        where("category", "==", category)
      );
      getDocs(queryCollectionFilter)
        .then((resp) =>
          setProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        )
        .catch((err) => console.error(err))
        .finally(() => setLoader(false));
    }
  }, [category]);

  return (
    <>
      <Link to="/shop" className="link">
        <p className="verTodo">Ver todo</p>
      </Link>
      <h1 className="itemListContainer__title">{greeting}</h1>
      <div className="itemListContainer">
        {loader ? (
          <Loader greeting={"Cargando productos..."} />
        ) : (
          <ItemList products={productsList} />
        )}
      </div>
      <Footer />
    </>
  );
}
