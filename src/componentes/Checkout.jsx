
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/firebase";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
    email2: "",
  });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

  
    if (!buyer.name || !buyer.phone || !buyer.email || !buyer.email2) {
      setError("Completá todos los campos");
      return;
    }

    if (buyer.email !== buyer.email2) {
      setError("Los emails no coinciden");
      return;
    }

    if (cart.length === 0) {
      setError("El carrito está vacío");
      return;
    }

   
    const items = cart.map((prod) => {
      const price = Number(prod.price) || 0;
      const quantity = Number(prod.quantity) || 0;

      return {
        id: prod.id ?? "",                  
        title: prod.title ?? "Sin título", 
        price,                             
        quantity,                         
      };
    });

    
    const total = items.reduce(
      (acc, prod) => acc + prod.price * prod.quantity,
      0
    );

    const order = {
      buyer: {
        name: buyer.name,
        phone: buyer.phone,
        email: buyer.email,
      },
      items,
      total,
    };

    try {
      setLoading(true);

      
      console.log("ORDEN A ENVIAR A FIRESTORE:", order);

      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      console.error("ERROR FIREBASE AL CREAR ORDEN:", err);
      setError("Hubo un error al generar la orden");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="checkout-success">
        <h2>Compra realizada con éxito</h2>
        <p>Tu código de orden es: {orderId}</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Finalizar compra</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Teléfono</label>
          <input
            type="text"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Repetir email</label>
          <input
            type="email"
            name="email2"
            value={buyer.email2}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Generando orden..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
