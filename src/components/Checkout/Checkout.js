import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import Swal from 'sweetalert2'
import { cart } from '../../context/cart'
import { generarOrden } from '../../firebase/generarOrden'
import {Form, Button} from 'react-bootstrap';

export const Checkout = () => {

    const {carrito, totalCarrito, vaciarCarrito} = useContext(cart)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: 0,
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length > 3 && values.email.length > 3 && values.tel.length > 5) {
            generarOrden(values, carrito, totalCarrito())
                .then( res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Su compra fue registrada!',
                        text: `Guarde este identificador: ${res}`,
                        confirmButtonText: 'Gracias por comprar en KP!'
                    })

                    vaciarCarrito()
                })
                .catch( err => {
                    console.log(err)
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Campos inválidos',
                text: 'Revise su información'
            })
        }
    }


    return (
        <div>
            <h2 className="text-center my-2">Checkout</h2>
            <hr/>
            
        {!carrito.length 
            ? <Redirect to="/"/>
            :
        
            <div className="d-flex justify-content-center text-center">
                <form onSubmit={handleSubmit}>
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Tu respuesta"
                        value={values.nombre}
                        onChange={handleInputChange}
                        name="nombre"
                        required
                        className="my-2"
                    />
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Tu respuesta"
                        value={values.tel}
                        onChange={handleInputChange}
                        name="tel"
                        required
                    />
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="ejemplo@gmail.com"
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                        required
                    />
                    <Button className="mt-3" variant="danger" type="submit">Enviar</Button>
                </form>
            </div>
        }
        </div>
    )
}

