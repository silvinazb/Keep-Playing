import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/firebase'
import {ItemDetail} from './ItemDetail'


export const ItemDetailContainer = () => {

    const {loading, setLoading} = useContext(UIContext)
    const {caract} = useParams()
    const [item, setItem] = useState(null)


useEffect (() => {

    setLoading(true)

    const db = getFirestore()

    const productos = db.collection('Productos')
    const item = productos.doc(caract)

    item.get()
    .then((doc) => {
        setItem( {...doc.data(), id: doc.id})
    })
    .finally(() => {setLoading(false)})

}, [caract, setLoading])


return (
    <div>
        {loading
        ? <h2>Cargando...</h2>
        : <h3>Características </h3> && <ItemDetail{...item}/>
        }
    </div>
)

}