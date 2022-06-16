import Item from "../Item/Item";
import './ItemList.css';


const ItemList = ({products, id}) => { 

  return (
    <>
      <div className="product-list-container">
        {products.map( product => <Item key={product.id} id={product.id} name={product.name} img={product.img} price={product.price}/> ) }
      </div>   
                
     
    </>

  );
};

export default ItemList;