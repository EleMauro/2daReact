

// src/componentes/Item.jsx
import "./css/Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, name, description, price } = product;

  return (
    <article className="item-card">
      <img
        src={`/autos/${id}.png`} 
        alt={name}
        className="item-img"
      />

      <h3 className="item-title">{name}</h3>
      <p className="item-description">{description}</p>
      <p className="item-price">${price}</p>

      <Link to={`/item/${id}`} className="item-btn">
        Ver detalle
      </Link>
    </article>
  );
};

export default Item;
