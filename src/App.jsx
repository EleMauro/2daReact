import { Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Cart from "./componentes/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer saludo="Bienvenido a mi tienda" />}
        />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer saludo="Filtrando por categoría" />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;
