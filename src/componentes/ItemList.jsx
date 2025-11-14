import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      <h2>Listado de productos</h2>

      {/* ACÁ VA EL FLEX */}
      <div className="products-container">
        {productos.map((prod) => (
          <Item key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

