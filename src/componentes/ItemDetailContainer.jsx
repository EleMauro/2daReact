// src/componentes/ItemDetailContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "../mock/AsyncService";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams(); // viene de /item/:id

  useEffect(() => {
    getProductoById(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.error("Error obteniendo producto:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Cargando detalle...</h2>;
  }

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
