import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import {pedirDatos} from '../../useful/pedirDatos'
import { ItemList } from './ItemList'
import { UIContext } from '../../context/UIContext'

export const ItemListContainer = () => {

    const {loading, setLoading} = useContext(UIContext)
    const { filtro } = useParams ()
    const [data, setData] = useState([]) 

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
