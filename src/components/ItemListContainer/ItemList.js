import React from 'react'
import { Item } from './Item'

export const ItemList = ({productos = []}) => {

    return (
        <section className="container my-3">
            <div className="row">
                {productos.map((prod) => <Item key={prod.id} item={(prod)}/> )}
            </div >
        </section>
    )
}