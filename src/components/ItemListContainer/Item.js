import React from 'react'
import './item.css'
import {Link} from "react-router-dom";


export const Item = ({item}) => {
    
    return (
    <div className="card w-25 text-center p-4 bg-light text-dark mb-1"  >
        <p className="fontPar">{item.nombre}</p>
        <img src={item.img} alt={item.nombre}/>
        <p className="my-1 ">${item.precio}</p>
        <Link to={`/detail/${item.id}`} className="text-decoration-none text-danger fontPar ">Detalles </Link>
    </div>
    )
}