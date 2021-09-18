import { getFirestore } from '../firebase/firebase'
import firebase from 'firebase/app';
import 'firebase/firestore'

export const generarOrden = (buyer, carrito, total) => {
    const db = getFirestore()
    const orders = db.collection('Orders')

    const newOrder = {
        buyer: buyer,
        items: carrito, 
        total: total, 
        date: firebase.firestore.Timestamp.fromDate(new Date())
    }

    try{
        orders.add(newOrder)
            .then((res) => console.log(res.id))
    } catch (err) {
        console.log(err)
    }

}
