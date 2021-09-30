import React, { useContext, useState } from 'react'
import {Link} from "react-router-dom";
import { cart } from '../../context/cart';
import { Counter } from '../Counter/Counter';

export const ItemDetail = ({category, id, nombre, precio, img, stock}) => {
    
    const {agregarAlCarrito, IsInCart} = useContext(cart)

    const [cantidad, setCantidad] = useState(1)

    const handleAddCart = () => {
        agregarAlCarrito({
            category, id, nombre, precio, img, cantidad
        })
    }

    return (
        <div>
            <div>
            <h2 className="text-center mb-5 my-1">Características</h2>
            </div>

            <div className="card col-3 mx-auto text-center text-dark p-4">
                <h3>{nombre}</h3>
                <p>{category}</p>
                <img src={img} alt={nombre}/>
                <p>${precio}</p>
                <Counter max={stock} 
                cantidad={cantidad} 
                setCantidad={setCantidad} 
                agregar={handleAddCart}
                agregado={IsInCart(id)}/>
                <Link to={`/category/${category}`}>Ver otros</Link>
            </div>
        </div>

    )
}