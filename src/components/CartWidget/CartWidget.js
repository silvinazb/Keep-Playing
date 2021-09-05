import React, { useContext } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { cart } from '../../context/cart'
import './CartWidget.css'

export const CartWidget = () => {

    const {cantidadCarrito} = useContext(cart)

    return (
        <Link to="/cart">
            <div className="cart-widget">
                <FaShoppingCart/>
                <span>{cantidadCarrito()}</span>
            </div>
        </Link>
    )
}