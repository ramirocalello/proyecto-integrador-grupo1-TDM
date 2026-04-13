import { Component } from "react";
import { Link } from "react-router-dom";
import './header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: '',
      display: ''
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
            <Link to="/peliculas" className="nav-link">Peliculas</Link>
          </li>
          <li className="nav-item">
            <Link to="/series" className="nav-link">Series</Link>
          </li>

          {this.state.cookie === '' ? (
            <div className="condicional">
              < li className="nav-item">
                <Link to="/register" className="nav-link">Crear Cuenta</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Iniciar Secion</Link>
              </li>
            </div>
          ) : (
            <li className="nav-item">
              <Link to="/favoritos" className="nav-link">Favoritos</Link>
            </li>
          )
          }

        </ul>
      </nav >
    );
  }
}


export default Header;



