import React from 'react'
import './Item.css'


export const Item = ({item}) => {
    
    return (
        <div className="ppal"  >
        <h3>{item.nombre}</h3>
        <img src={item.img} alt={item.nombre}/>
        <p>{item.descripcion}</p>
        <p>${item.precio}</p>
    </div>
    )
}