import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Busquedad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: "",
            tipo: "movie"
        }
    }

    controlarBusqueda(event) {
        this.setState({
            busqueda: event.target.value
        });
    }

    controlarTipo(event) {
        this.setState({
            tipo: event.target.value
        });
    }

    enviarFormulario(event) {
        event.preventDefault();
        this.props.history.push("/results/" + this.state.tipo + "/" + this.state.busqueda);
    }

    render() {
        return (
            <form onSubmit={(event) => this.enviarFormulario(event)}>
                <input
                    type="text"
                    value={this.state.busqueda}
                    onChange={(event) => this.controlarBusqueda(event)}
                    placeholder="Buscar..."
                />

                <select
                    value={this.state.tipo}
                    onChange={(event) => this.controlarTipo(event)}
                >
                    <option value="movie">Películas</option>
                    <option value="tv">Series</option>
                </select>

                <button type="submit">Buscar</button>
            </form>
        )
    }
}

export default withRouter(Busquedad);