import { createContext, useState } from "react";


export const cart = createContext()


export const CartProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (prod) => {
        setCarrito([
            ...carrito,
            prod
        ])
    }

    const eliminarDelCarrito = (id) => {
    setCarrito( carrito.filter(prod => prod.id !== id) )
    }

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const IsInCart = (id) => {
        return carrito.some(el => el.id == id)
    }

    return (
        <cart.Provider value={{carrito, IsInCart, vaciarCarrito, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito}}>
            {children}
        </cart.Provider>
    )
}
