import React from 'react'
import './NavBar.css'
import {CartWidget} from "../CartWidget/CartWidget"

export const NavBar = () => {

    return (
    
    <header className="encabezado">
            <h2>Logo tienda</h2>
            <nav>
                <a href="#">Productos </a>
                <a href="#">Contacto </a>
                <CartWidget/>
            </nav>
    </header>

    )
}
