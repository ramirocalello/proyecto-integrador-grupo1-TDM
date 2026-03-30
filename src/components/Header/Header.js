import { Component } from "react";
import Elementosnav from "../Elementosnav/Elementosnav"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  
        visibles: [{name:"home", path:"/"},  {path:"/crear"}, {name:"favoritos", path:"/favoritos"}],
        invisiibles: [{name:"crear"}, {name:"login"}],
        cookie: "",
    }
  }
  render() {
    return (
      <section className="card-container">
        {this.state.cookie === '' ? (
          this.state.visible.map((e) => (
            <Elementosnav 
            name={e.name}
            path={e.path}
            />
          ))
        ) : (
          this.state.invisbles.map((e) => (
            <Elementosnav 
            name={e.name}
            path={e.path}/>
          ))
        )
        }
        
        <button className="boton-personajes" onClick={() => this.masPersonajes()}>Mas Personajes</button>
      </section>
    )
  }
}

export default Header
