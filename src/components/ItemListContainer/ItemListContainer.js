import React, {useEffect, useState} from 'react'
import './ItemListContainer.css'
import {pedirDatos} from '../../useful/pedirDatos'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(false)

    useEffect( () => {

        setLoading(true)

        pedirDatos()
            .then(res => setData(res))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="bienvenida">
        <h2>Bienvenidos a mi tienda</h2>
        {loading ? <h2>Cargando...</h2> : <ItemList productos={data}/>
}       </div>
            )      
            }
