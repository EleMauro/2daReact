
import { productos } from "./productos";


export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};


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
