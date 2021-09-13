import { stock } from "../data/stock"

export const pedirDatos = () => {
        
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

