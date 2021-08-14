import { NavBar } from './components/NavBar/NavBar';
import'./styles/styles.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

function App() {

  return (

    <>
      <NavBar/>
      <ItemListContainer greeting= "Bienvenidos a Mi Tienda"/>
    </>
  );
}

export default App;
