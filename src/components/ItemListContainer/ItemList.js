import React from 'react'
import { Item } from './Item'

export const ItemList = ({productos = []}) => {

    return (
        <section className="container my-3">
            {/* <h2 className="my-3 ">Productos</h2> */}
            <div className="row">
                {productos.map((prod) => <Item key={prod.id} item={(prod)}/> )}
            </div >
        </section>
    )
}