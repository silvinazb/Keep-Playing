import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { Counter } from '../Counter/Counter';

export const ItemDetail = ({category, nombre, precio, img, stock}) => {
        
    const [cantidad, setCantidad] = useState(1)

    // const agregarAlCarrito = () =>{
    //     console.log({
    //         category, nombre, precio, img, stock
    //     })
    // }

    return (
        <div>
            <div>
            <h2 className="text-center mb-5 my-1">Características</h2>
            </div>

            <div className="card col-3 mx-auto text-center text-dark">
            <h3>{nombre}</h3>
            <p>{category}</p>
            <img src={img} alt={nombre}/>
            <p>${precio}</p>
            <Counter max={stock} cantidad={cantidad} setCantidad={setCantidad}/>
            <Link to={`/category/${category}`}>Ver otros</Link>
            </div>
        </div>

    )
}