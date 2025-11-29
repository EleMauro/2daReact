// src/componentes/Cart.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./css/Cart.css";

const Cart = () => {
  const { cart, totalPrice, removeItem, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu carrito</h2>

      <div className="cart-items">
        {cart.map((prod) => (
          <div key={prod.id} className="cart-item">
            <h3>{prod.title}</h3>
            <p>Cantidad: {prod.quantity}</p>
            <p>Precio unitario: ${prod.price}</p>
            <p>Subtotal: ${prod.price * prod.quantity}</p>
            <button onClick={() => removeItem(prod.id)}>Eliminar</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${totalPrice()}</h3>

        <div className="cart-actions">
          <button onClick={clearCart}>Vaciar carrito</button>

          <Link to="/checkout">
            <button>Finalizar compra</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

