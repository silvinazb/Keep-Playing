import { getFirestore } from '../firebase/firebase'
import firebase from 'firebase/app';
import 'firebase/firestore'

export const generarOrden = (buyer, carrito, total) => {

    return new Promise ((resolve, reject) => { 
        const db = getFirestore()
        const orders = db.collection('Orders')
    
        const newOrder = {
            buyer: buyer,
            items: carrito, 
            total: total, 
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
    
        orders.add(newOrder)
            .then((res) => {
                resolve(res.id)
            })
            .catch((err) => {
                reject(err)
            })
})
}
