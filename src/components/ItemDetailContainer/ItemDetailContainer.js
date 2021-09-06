import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { pedirDatos } from '../../useful/pedirDatos'
import {ItemDetail} from './ItemDetail'

export const ItemDetailContainer = () => {

    const {loading, setLoading} = useContext(UIContext)
    const {caract} = useParams()
    const [item, setItem] = useState(null)


useEffect (() => {
    setLoading(true)
    pedirDatos()
    .then( res =>{
        setItem(res.find(prod => prod.id === parseInt(caract)))
    })

    .finally(() => {setLoading(false)})

}, [caract])


return (
    <div>
        {loading
        ? <h2>Cargando...</h2>
        : <h3>Características </h3> && <ItemDetail{...item}/>
        }
    </div>
)

}