import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { ItemList } from './ItemList'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/firebase'
import { Loader } from '../Loader/Loader'

export const ItemListContainer = () => {

    const {loading, setLoading} = useContext(UIContext)
    const { filtro } = useParams ()
    const [data, setData] = useState([]) 

    useEffect( () => {
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('Productos')

        if (filtro){
            const filtrado = productos.where('category', '==', filtro)
            filtrado.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    setData(data)
                }, 1000)
                .finally(() => {
                    setLoading(false)
                })
        } else {
            productos.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    setData(data)
            })
                .finally( () => {
                        setLoading(false)
                    })
        }


    }, [filtro, setLoading])

    return (
            <> 
            <h2 className="text-center my-2">Productos</h2>
                {loading 
                ? <Loader/> 
                : <ItemList productos={data}/>    
                }
            </>
        )
    }

