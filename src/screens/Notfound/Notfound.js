import { Component } from "react"
import { Link } from "react-router-dom"

class notFound extends Component {
  render() {
    return (
      <div className="container text-center mt-5">
        <h1 className="display-1">404</h1>
        <h2 className="alert alert-danger">El contenido que buscas no fue encontrado</h2>
        <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
      </div>
    );
  }
}

export default notFound;