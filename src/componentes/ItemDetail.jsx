// src/componentes/ItemDetail.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./css/ItemDetail.css";
import ItemCount from "./ItemCount";

const getImageUrl = (path) => {
  if (!path) return "";
  const clean = path.trim().replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${clean}`;
};

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  const imageUrl = getImageUrl(product.img);

  return (
    <div className="item-detail">
      <div className="item-detail-image-wrapper">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={product.title}
            className="item-detail-image"
            style={{
              width: "400px",
              height: "300px",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <div className="item-detail-image-placeholder">Sin imagen</div>
        )}
      </div>

      <div className="item-detail-info">
        <h2>{product.title}</h2>
        <p>Categoría: {product.category}</p>
        <p>Precio: ${product.price}</p>
        <p>Stock: {product.stock}</p>

        {!added ? (
          <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
        ) : (
          <div className="item-detail-actions">
            <Link to="/cart">
              <button>Ir al carrito</button>
            </Link>
            <Link to="/">
              <button>Seguir comprando</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

