const ItemDetail = ({ product }) => {
  const { name, description, price, stock, category } = product;

  return (
    <article>
      <h2>{name}</h2>
      <p><strong>Categoría:</strong> {category}</p>
      <p>{description}</p>
      <p><strong>Precio:</strong> ${price}</p>
      <p><strong>Stock:</strong> {stock} unidades</p>
    </article>
  );
};

export default ItemDetail;
