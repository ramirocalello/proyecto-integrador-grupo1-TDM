import React from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header.js"
import Crear from "./components/Crear/Crear.js"

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Crear/>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
