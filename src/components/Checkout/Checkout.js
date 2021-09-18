import React, { useContext } from 'react'
import { cart } from '../../context/cart'
import { generarOrden } from '../../firebase/generarOrden'


export const Checkout = () => {

    const {carrito, totalCarrito}= useContext(cart)

    const buyer = {
        nombre: "Silvina",
        tel: 12345678,
        email: "prueba@prueba.com"
    }
    
    return (
        <div className="text-center">
            <h2 className=" mt-3 text-danger">Checkout</h2>
            <button className="btn btn-success" onClick={() => generarOrden(buyer,carrito,totalCarrito())}>Generar orden</button>
        </div>
    )
}

