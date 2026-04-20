import { Component } from "react";
import { Link } from "react-router-dom";
import './header.css'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: cookies.get('usuario'),
      display: ''
    }
  }
  logout = () => {
    cookies.remove('usuario', { path: '/' });
    window.location.href = "/login";
  }


  render() {
    return (
      <nav>
        <ul className="nav nav-tabs my-4">
          <li className="nav-item">
            <Link to="/" className="stremeo nav-link">STREMEO</Link>
          </li>

          <li className="nav-item">
            <Link to="/peliculas" className="nav-link">Peliculas</Link>
          </li>

          <li className="nav-item">
            <Link to="/series" className="nav-link">Series</Link>
          </li>

          {this.state.cookie ? (
            <li className="nav-item">
              <Link to="/favoritos" className="nav-link">Favoritos</Link>
            </li>
          ) : (
            <div className="div-header">
              <li className="nav-item">
                <Link to="/register" className="nav-link">Crear Cuenta</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Iniciar Sesion</Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    );
  }
}


export default Header;



