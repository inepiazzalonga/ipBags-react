import {products} from "./productos"
import { getFirestore, collection, addDoc } from "firebase/firestore"


 export function ProductsFB  ()  {
    products.forEach((product) => {
        const db = getFirestore()
        const queryCollectionPush = collection(db, "products")
        addDoc(queryCollectionPush, product)
            .then((res) => console.log(res))
    })
}

