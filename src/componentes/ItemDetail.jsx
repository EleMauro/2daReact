import "./css/ItemDetail.css";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ product }) => {

  const { addToCart } = useCart();

  const { id, name, price, description, img, category } = product;

  const handleComprar = () => {
  const fixedImg = img.replace("./", "/");

  addToCart({
    id,
    name,
    price,
    img: fixedImg,
    quantity: 1,
  });
};

  return (
    <div className="detail-container">
      <div className="detail-img-wrapper">
        <img src={img} alt={name} className="detail-img" />
      </div>

      <div className="detail-info">
        <h2>{name}</h2>

        <p><strong>Categoría:</strong> {category}</p>
        <p><strong>Precio:</strong> ${price}</p>

        <p>{description}</p>

        <button className="btn-comprar" onClick={handleComprar}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
