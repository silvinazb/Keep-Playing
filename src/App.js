import { NavBar } from './components/NavBar/NavBar';
import'./styles/styles.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { CartWidget } from './components/CartWidget/CartWidget';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { cart } from './context/cart';
import { useState } from 'react';



function App() {

  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (prod) => {
    setCarrito([
      ...carrito,
      prod
    ])
  }

const eliminarDelCarrito = (id) => {
  setCarrito(carrito.filter(prod => prod.id !== id))
}

const cantidadCarrito = () => {
  return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
}

const vaciarCarrito = () =>{
  return setCarrito ([])
}

  return (

    <>
    <cart.Provider value={{carrito, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito, vaciarCarrito}} >
      <BrowserRouter>

      <NavBar/>

      <Switch>

      <Route exact path="/">
        <ItemListContainer/>
      </Route>
    
      <Route exact path="/category/:filtro">
        <ItemListContainer/>
      </Route>

      <Route exact path="/detail/:caract">
        <ItemDetailContainer/>
      </Route>

      <Route exact path="/cart">
        <h1>Carrito</h1>
        <CartWidget/>
      </Route>

      </Switch>

      </BrowserRouter>
    </cart.Provider>
    </>
  );
}

export default App;

