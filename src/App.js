import React from "react"
import Footer from "./components/Footer/Footer.js"
import Home from "./screens/Home/Home.js"
import Register from "./screens/Register/Register.js"
import Peliculas from "./screens/Peliculas/Peliculas.js"
import Detalle from "./screens/Detalle/Detalle.js"
import Series from "./screens/Series/Series.js"
import Login from "./screens/Login/Login.js"
import Results from "./screens/Results/Results.js"
import Header from './components/Header/Header.js'
import Favoritos from './screens/Favoritos/Favoritos.js'
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min.js"

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
       <Route path="/" exact={true} component={Home} />
       <Route path="/peliculas" component={Peliculas} />
       <Route path="/series" component={Series} />
       <Route path="/register" component={Register} />
       <Route path="/detalle/:id" component={Detalle} />
       <Route path="/favoritos" component={Favoritos} />
       <Route path="/login" component={Login} />
      <Route path="/results/:tipo/:busqueda" component={Results} />  
   </Switch>
      <Footer />
    </React.Fragment>
  );
} 

export default App;