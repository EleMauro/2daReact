import { useCart } from "../context/CartContext";
import "./css/Cart.css";

const Cart = () => {

  const { cart, totalPrice, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} className="cart-item-img" />

            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>

              <button
                className="cart-remove"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        {}
        <h3>Total: ${totalPrice}</h3>

        <button className="cart-clear" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;


