import React from 'react'
import { Item } from './Item'

export const ItemList = ({productos = []}) => {

    return (
        <section>
            <h2>Productos</h2>
            <div>
                {productos.map((prod) => <Item key={prod.id} item={(prod)}/> )}
            </div>
        </section>
    )
}