import React, {useEffect, useState} from 'react'

import './ItemListContainer.css'

export const ItemListContainer = ( {greeting} ) => {

    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(false)

    const stock = [
        {
            id: 1,
            nombre: "remera", 
            precio: 2000
        },

        {
            id: 2,
            nombre: "buzo", 
            precio: 3000
        },

        {
            id: 3,
            nombre: "campera", 
            precio: 5000
        }
    ]

    const pedirDatos = () => {
        
        return new Promise((resolve, reject) => {

            // if (valor) {
            //     resolve("promesa ok")
            // } else {
            //     reject ("promesa wrong")
            // }

            setTimeout(() =>{
                resolve(stock)
            }, 2000)
        })
    }

    useEffect( () => {

        setLoading(true)

        // pedirDatos(true)
        //     .then( res => {
        //         setData(res)
        //     })
        //     .catch( err => {
        //         setData(err)
        //     })
        //     // Para el estado de carga por ejemplo
        //     .finally(() => {
        //         console.log("Fin del llamado")
        //     })

        pedirDatos()
            .then(res => setData(res))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="bienvenida">
            <h2>{greeting}</h2>

            {
                loading ? "Loading..." : <p>{ JSON.stringify(data) }</p>
            }
        </div>
        )
}
