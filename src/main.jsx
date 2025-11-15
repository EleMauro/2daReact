import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// IMPORTAR EL PROVIDER
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter basename="/reactnuevo">
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
