import { NavBar } from './components/NavBar/NavBar';
import'./styles/styles.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { CartWidget } from './components/CartWidget/CartWidget';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {

  return (

    <>

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

    <Route exact path="/nosotros">
      <h2 className="text-center text-danger my-2">Nosotros</h2>
    </Route>

    <Route exact path="/contacto">
      <h2 className="text-center text-danger my-2">Contacto</h2>
    </Route>

    <Route exact path="/cart">
      <CartWidget/>
    </Route>

    </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;

