import React from 'react'
import {Link} from "react-router-dom";


export const Item = ({item}) => {
    
    return (
        <div className="card col-4 text-center p-4 bg-dark text-white"  >
        <h3>{item.nombre}</h3>
        <img src={item.img} alt={item.nombre}/>
        <p>${item.precio}</p>
        <Link to={`/detail/${item.id}`}>Detalles </Link>
    </div>
    )
}