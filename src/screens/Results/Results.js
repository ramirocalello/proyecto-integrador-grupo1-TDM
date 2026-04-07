import React, { Component } from "react";
import Card from "../../components/Card/Card";
import Busquedad from "../../components/Busquedad/Busquedad";

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: [],
            tipo: props.match.params.tipo,
            busqueda: props.match.params.busqueda
        }
    }

    componentDidMount() {
        if (this.state.tipo === "movie") {
            fetch("https://api.themoviedb.org/3/search/movie?api_key=8c5941c39922b8ccee40a07dc13fb0fc&query=" + this.state.busqueda)
                .then((response) => response.json())
                .then((data) =>
                    this.setState({
                        resultados: data.results
                    })
                )
                .catch((error) => console.log(error));
        } else {
            fetch("https://api.themoviedb.org/3/search/tv?api_key=8c5941c39922b8ccee40a07dc13fb0fc&query=" + this.state.busqueda)
                .then((response) => response.json())
                .then((data) =>
                    this.setState({
                        resultados: data.results
                    })
                )
                .catch((error) => console.log(error));
        }
    }

    render() {
        return (
            <div>
                <h2>
                    Resultados de búsqueda de {this.state.tipo === "movie" ? "películas" : "series"}
                </h2>
                <Busquedad />
                <p>Buscaste: {this.state.busqueda}</p>

                <section className="cards-container">
                    {this.state.resultados.map((elemento, idx) => (
                        <Card
                            key={elemento.id + idx}
                            img={elemento.poster_path}
                            title={this.state.tipo === "movie" ? elemento.title : elemento.name}
                            desc={elemento.overview}
                            id={elemento.id}
                        />
                    ))}
                </section>
            </div>
        );
    }
}

export default Results;