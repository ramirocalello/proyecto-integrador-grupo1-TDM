import { Component } from "react";
import Card from "../../components/Card/Card.js"

class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            paginaActual: 1,
        }
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8c5941c39922b8ccee40a07dc13fb0fc')
            .then(response => response.json())
            .then(data => this.setState(
                {
                    series: data.results,
                    paginaActual: 2,
                }
            ))
            .catch((error) => console.log(error))

    }
    masSeries() {
        fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8c5941c39922b8ccee40a07dc13fb0fc&page=${this.state.paginaActual}`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    series: this.state.series.concat(data.results),
                    paginaActual: this.state.paginaActual + 1
                }
            ))
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div>
                <section className="card-container">
                    {this.state.series === '' ? (
                        <p>Cargando...</p>
                    ) : (
                        <div>
                            <h2 className="alert alert-primary">Series Populares</h2>
                            <section className="row cards home" id="movies">
                                {this.state.series.map((e, idx) => (
                                    <Card
                                        key={idx}
                                        id={e.id}
                                        title={e.original_title}
                                        desc={e.overview}
                                        img={e.poster_path}
                                    />
                                ))}
                                <button className="btn btn-primary" onClick={() => this.masSeries()}>Cargas Mas series</button>
                            </section>
                        </div>
                    )
                    }
                </section>
            </div>
        )
    }
}

// Falta hacer el formulario para filtrar la busquedad

export default Series