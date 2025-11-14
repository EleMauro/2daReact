import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../mock/AsyncService";
import ItemList from "./ItemList";
import "./css/Item.css"; 

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    getProductos()
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => {
        console.error("Error obteniendo productos:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  const productosFiltrados = categoryId
    ? productos.filter((prod) => prod.category === categoryId)
    : productos;

  return (
    <div>
      <h1>{saludo}</h1>
      <ItemList productos={productosFiltrados} />
    </div>
  );
};

export default ItemListContainer;
