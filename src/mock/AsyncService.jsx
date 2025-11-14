
import { productos } from "./productos";

// Traer TODOS los productos
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000); // 1 segundo para simular llamada a API
  });
};

// Traer UN solo producto por id (lo usaremos para el detalle)
export const getProductoById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productoEncontrado = productos.find(
        (prod) => prod.id === id
      );
      resolve(productoEncontrado);
    }, 1000);
  });
};
