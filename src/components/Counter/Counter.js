import React from 'react'
import { Link } from 'react-router-dom'

export const Counter = ({max, cantidad, setCantidad, agregar, agregado}) =>{


    const handleSumar = () => {
        if (cantidad < max){
            setCantidad(cantidad + 1)
        }
    }

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
        <div className="d-flex justify-content-center">
            {
                agregado ? <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                :
                <div className="d-flex">
                    <button className="btn btn-danger mx-1" onClick={handleRestar} >-</button>
                    <p>{cantidad}</p>
                    <button className="btn btn-danger mx-1" onClick={handleSumar}>+</button>
                    <button className="btn btn-danger mt-2" onClick={agregar}>Agregar al carrito</button>
                </div>
            }
        </div>
        </>
    )
}