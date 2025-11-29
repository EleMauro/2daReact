// src/componentes/ItemDetailContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../services/firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => {
        console.error(err);
        setError("Error al cargar el producto");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h2>Cargando...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!product) return <h2>Producto no encontrado</h2>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
