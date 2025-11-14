import "./css/CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src="./carrito.png" alt="Carrito" className="cart-icon" />
      <span className="cart-count">X compras en carrito!</span>
    </div>
  );
};

export default CartWidget;

