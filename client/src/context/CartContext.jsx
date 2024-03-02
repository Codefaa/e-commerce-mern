import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    function agregarAlCarrito(artefacto, cantidad) {
      const artefactoAgregado = {...artefacto, cantidad};
  
      const nuevoCarrito = [...carrito];
      const estaEnElCarrito = nuevoCarrito.find((producto) => producto._id === artefactoAgregado._id);
      
      if(estaEnElCarrito) {
          estaEnElCarrito.cantidad += cantidad;
      }
      else {
          nuevoCarrito.push(artefactoAgregado);
      }
      setCarrito(nuevoCarrito);
    }
  
    function cantidadEnCarrito() {
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }
  
    function precioTotal() {
      return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }
  
    function vaciarCarrito() {
      setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])

    return (
        <CartContext.Provider value={ { carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito } }>
            {children}
        </CartContext.Provider>
    )
}


