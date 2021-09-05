import React, { useContext } from 'react'
import {cart} from '../../context/cart'

export const CartCheckout = () =>{

const {carrito, eliminarDelCarrito, vaciarCarrito} = useContext(cart)

    return (
        <div className="text-center">
            <h2 className=" mt-3 text-danger">Resumen de compra</h2>
            {carrito.map(prod => (
                <div className="mt-4">
                    <h3>{prod.nombre}</h3>
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Precio: ${prod.precio * prod.cantidad}</p>
                </div>
            ))}
            <button className="btn btn-danger " onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}
