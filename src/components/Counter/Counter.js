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
                agregado ? <Link to="/cart" className="btn btn-success">Ir al carrito</Link>
                :
                <div>
                    <div className="d-flex mx-5">
                    <button className="btn btn-danger " onClick={handleRestar} >-</button>
                    <p className="text-center mt-1 px-2">{cantidad}</p>
                    <button className="btn btn-danger " onClick={handleSumar}>+</button>
                    </div>
                    <button className="btn btn-danger mt-2" onClick={agregar}>Agregar al carrito</button>
                </div>
            }
        </div>
        </>
    )
}