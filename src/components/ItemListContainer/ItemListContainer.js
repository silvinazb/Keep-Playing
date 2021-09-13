import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import {pedirDatos} from '../../useful/pedirDatos'
import { ItemList } from './ItemList'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/firebase'

export const ItemListContainer = () => {

    const {loading, setLoading} = useContext(UIContext)
    const { filtro } = useParams ()
    const [data, setData] = useState([]) 

    useEffect( () => {
        setLoading(true)

        const db = getFirestore()

        const productos = db.collection('Productos')

        productos.get().then((response) => {
            const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
            console.log(data)

            setData(data)
        })
        .finally( () => {
                    setLoading(false)
                })

    }, [filtro, setLoading])

    return (
        <div className="bienvenida">
        <h2 className="text-danger">Productos</h2>
        {loading ? <h2>Cargando...</h2> : <ItemList productos={data}/>}       
        </div>
            )      
            }
