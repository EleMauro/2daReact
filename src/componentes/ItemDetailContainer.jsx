import { useParams } from "react-router-dom";
import { productos } from "../mock/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const product = productos.find((prod) => prod.id === id);

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
