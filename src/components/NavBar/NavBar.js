import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import {Link} from "react-router-dom";
import { Nav } from 'react-bootstrap';



export const NavBar = () => {

    return (
    
      <div>
      <header className="encabezado">
        <h2 ><Link to={"/"} className=" text-white text-center text-decoration-none">Keep Playing </Link></h2>
        <CartWidget/>
      </header>
      <div className="">
        <Nav className="justify-content-center bg-danger p-2" >
          <Nav.Item >
            <Link to={"/category/Accion"} className="text-white text-decoration-none hoverNav px-2">Acción y Aventura |</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/category/Deporte"} className="text-white text-decoration-none hoverNav px-2">Deporte |</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/category/RPG"} className="text-white text-decoration-none hoverNav px-2">RPG |</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/category/Shooter"} className="text-white text-decoration-none hoverNav px-2">Shooter |</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/category/SurvivalHorror"} className="text-white text-decoration-none hoverNav px-2">Survival Horror</Link>
          </Nav.Item>
        </Nav>
      </div>
      </div>


    )
}
