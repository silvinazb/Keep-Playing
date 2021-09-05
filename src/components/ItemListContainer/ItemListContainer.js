import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import {pedirDatos} from '../../useful/pedirDatos'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const { filtro } = useParams ()

    
    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(false)

    useEffect( () => {

        setLoading(true)

        pedirDatos()
            .then(res => {
                if(filtro) {
                    const arrayFiltrado = res.filter (prod => prod.category === filtro)
                    setData(arrayFiltrado)
                } else {
                    setData(res)
                }
            })
            .finally( () => {
                setLoading(false)
            })
    }, [filtro])

    return (
        <div className="bienvenida">
        <h2 className="text-danger">Productos</h2>
        {loading ? <h2>Cargando...</h2> : <ItemList productos={data}/>}       
        </div>
            )      
            }
