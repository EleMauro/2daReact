import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../services/firebase";

const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts(categoryId)
      .then((data) => setItems(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <h2>Cargando...</h2>;

  return (
    <>
      <h1>{saludo}</h1>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
