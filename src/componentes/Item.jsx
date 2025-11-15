// src/componentes/Item.jsx
import "./css/Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, name, description, price, condition, img } = product;

  return (
    <article className="item-card">
      <img
        src={img}
        alt={name}
        className="item-img"
      />

      <h3 className="item-title">{name}</h3>

      <p className="item-condition">
        {condition === "0km" ? "Vehículo 0km" : "Vehículo usado"}
      </p>

      <p className="item-description">{description}</p>
      <p className="item-price">${price}</p>

      <Link to={`/item/${id}`} className="item-btn">
        Ver detalle
      </Link>
    </article>
  );
};

export default Item;
