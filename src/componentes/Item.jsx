import { Link } from "react-router-dom";
import "./css/Item.css";

const getImageUrl = (path) => {
  if (!path) return "";
  const clean = path.trim().replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${clean}`;
};

const Item = ({ product }) => {
  const imageUrl = getImageUrl(product.img);

  return (
    <div className="item-card">
      <div className="item-image-wrapper">
        {imageUrl ? (
          <img src={imageUrl} alt={product.title} className="item-image" />
        ) : (
          <div className="item-image-placeholder">Sin imagen</div>
        )}
      </div>

      <div className="item-info">
        <h3>{product.title}</h3>
        <p>Vehículo {product.category}</p>
        <p className="item-price">${product.price}</p>
      </div>

      <div className="item-actions">
        <Link to={`/item/${product.id}`}>
          <button>Ver detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
