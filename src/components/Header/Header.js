import { Component } from "react";
import Elementosnav from "../Elementosnav/Elementosnav"
import Busquedad from "../Buscador/Buscador";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permanente: [{ name: "Home", path: "/" }, { name: "Login", path: "/login" }, { name: "register", path: "/register" }, { name: "Favoritos", path: "/favoritos" }],
      cookie: "",
    }
  }
  render() {
    return (
      <nav>
        <ul className="nav nav-tabs my-4">
          <li className="nav-item">
            <Link to="/" exact="true" className="stremeo nav-link">STREMEO</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">Crear Cuenta</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Iniciar Secion</Link>
          </li>
          <li className="nav-item">
            <Link to="/favoritos" className="nav-link">Favoritos</Link>
          </li>
        </ul>
      </nav >
    );
  }
}


export default Header;



