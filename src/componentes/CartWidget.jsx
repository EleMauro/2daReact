import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import carrito from "../assets/carrito.png";
import "./css/CartWidget.css";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      <img src={carrito} alt="Carrito" className="cart-widget-icon" />
      {totalQuantity() > 0 && (
        <span className="cart-widget-badge">{totalQuantity()}</span>
      )}
    </Link>
  );
};

export default CartWidget;



