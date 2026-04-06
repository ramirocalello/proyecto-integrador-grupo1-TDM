import { Component } from "react";
import Elementosnav from "../Elementosnav/Elementosnav"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: [{ name: "home", path: "/" }, { name: "Crea tu cuenta", path: "/crear" }, { name: "favoritos", path: "/favoritos" }],
      invisiible: [{ name: "crear", path: "/crear" }, { name: "login", path: "/login" }],
      cookie: "",
    }
  }
  render() {
    return (
      <section className="card-container">
        {this.state.cookie !== '' ? (
          this.state.visible.map((e) => (
            <Elementosnav
              name={e.name}
              path={e.path}
            />
          ))
        ) : (
          this.state.invisiible.map((e) => (
            <Elementosnav
              name={e.name}
              path={e.path} />
          ))
        )
        }
      </section>
    )
  }
}

export default Header
