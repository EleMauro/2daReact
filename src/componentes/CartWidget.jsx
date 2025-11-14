
import "./css/CartWidget.css";
import cartIcon from "../assets/carrito.png"; 

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img
        src={cartIcon}
        alt="Carrito de compras"
        className="cart-icon"
      />
      <span className="cart-count">X compras en carrito!</span>
    </div>
  );
};

export default CartWidget;


