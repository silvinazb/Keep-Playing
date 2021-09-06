import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import {Link} from "react-router-dom";
import { Dropdown } from 'react-bootstrap';



export const NavBar = () => {

    return (
    
    <header className="encabezado">
            <h2 ><Link to={"/"} >Keep Playing </Link></h2>
            <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        Productos
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="bg-dark text-white">
                        <Dropdown.Item><Link to={"/category/RPG"}>RPG</Link></Dropdown.Item>
                        <Dropdown.Item><Link to={"/category/Accion"}>Accion</Link></Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
            <CartWidget/>

    </header>

    )
}
