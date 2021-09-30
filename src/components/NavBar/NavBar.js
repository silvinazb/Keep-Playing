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
      <div>
        <Nav className="justify-content-center bg-danger " activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/category/Accion" className="text-white text-decoration-none">Acción y Aventura</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/Deporte" className="text-white text-decoration-none">Deporte</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/RPG" className="text-white text-decoration-none">RPG</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/Shooter" className="text-white ">Shooter</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/category/SurvivalHorror" className="text-white text-decoration-none">Survival Horror</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      </div>


    )
}
