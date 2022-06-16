import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";
import { Footer } from "../Footer/Footer";

export const ItemDetailContainer = () => {
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, "products", id);
    getDoc(dbQuery)
      .then((resp) => {
        !resp.data() && navigate("/*", { replace: true });
        setProduct({ id: resp.id, ...resp.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, [navigate]);

  return (
    <>
      <div>
        {loader ? (
          <Loader greeting={"Please wait 💓"} />
        ) : (
          <ItemDetail product={product} />
        )}
      </div>
      <Footer />
    </>
  );
};
