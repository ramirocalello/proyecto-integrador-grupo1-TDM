import React from "react"
import Footer from "./components/Footer/Footer.js"
import Crear from "./components/Crear/Crear.js"
import Home from "./components/Home/Home.js"
import Header from './components/Header/Header.js'
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min.js"

function App() {
  return (
    <React.Fragment>
      <h1 className="stremeo">STREMEO</h1>
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;


{/* <BrowserRouter>
        <Header />

        <Switch>
             <Route path="/crear" component={Crear} />
        </Switch>

      </BrowserRouter> */}