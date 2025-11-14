// src/componentes/ItemList.jsx
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      <h2>Listado de productos</h2>
      <div>
        {productos.map((prod) => (
          <Item key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
