import { Component } from "react"
import { Link } from "react-router-dom"
import Header from '../../components/Header/Header.js'

class notFound extends Component {
    constructor(props) {
    super(props);
    }
  
  render() {
    return (
      <div>
      <Header/>
      <div className="container text-center mt-5">
        <h1 className="display-1">404</h1>
        <h2 className="alert alert-danger">El contenido que buscas no fue encontrado</h2>
        <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
      </div>
      </div>
    );
  }
}

export default notFound;