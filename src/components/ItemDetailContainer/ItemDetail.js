import React from 'react'
import {Link} from "react-router-dom";
export const ItemDetail = ({category, nombre, precio, img}) => {


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
        <Link to={`/category/${category}`}>Ver otros</Link>
        </div>
        </div>

    )
}