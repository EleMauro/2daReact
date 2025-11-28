
import Item from "./Item";
import "./css/Item.css";

const ItemList = ({ items = [] }) => {
   if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="itemlist-empty">
        <h2>No hay productos para mostrar</h2>
      </div>
    );
  }

return (
  <div className="itemlist-container">
    {items.map((prod) => (
      <Item key={prod.id} product={prod} />  
    ))}
  </div>
);
};


export default ItemList;
