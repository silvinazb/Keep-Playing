import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) =>{

    return (
        <div className="bienvenida">
            <h2>{greeting}</h2>
        </div>
    )

}