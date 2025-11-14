// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter basename="/reactnuevo">
      <Navbar />
     
      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={<ItemListContainer saludo="Bienvenido a mi tienda" />}
        />

        {/* CATEGORIAS */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer saludo="Filtrando por categoría" />}
        />

        {/* DETALLE */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/* ERROR 404 */}
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
