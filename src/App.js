import { NavBar } from './components/NavBar/NavBar';
import'./styles/styles.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { CartCheckout } from './components/CartCheckout/CartCheckout';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './context/cart';
import { UIContextProvider } from './context/UIContext';



function App() {

  return (

    <>
    <UIContextProvider>
      <CartProvider>
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
              <CartCheckout/>
            </Route>

          </Switch>

        </BrowserRouter>
      </CartProvider>
    </UIContextProvider>

    </>
  );
}

export default App;

