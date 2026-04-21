import { Component } from "react";
import Card from "../../components/Card/Card.js"
import Header from '../../components/Header/Header.js'

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            paginaActual: 1,
            busqueda: ""
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=8c5941c39922b8ccee40a07dc13fb0fc")
            .then(response => response.json())
            .then(data => this.setState({
                peliculas: data.results,
                paginaActual: 2,
            }))
            .catch((error) => console.log(error))
    }

    masPeliculas() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8c5941c39922b8ccee40a07dc13fb0fc&page=${this.state.paginaActual}`)
            .then(response => response.json())
            .then(data => this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                paginaActual: this.state.paginaActual + 1
            }))
            .catch((error) => console.log(error))
    }

    ControlarInput(event) {
        this.setState({
            busqueda: event.target.value
        })
    }

    render() {
        let PeliculasFiltradas = this.state.peliculas.filter((pelicula) =>
            pelicula.original_title.toLowerCase().includes(this.state.busqueda.toLowerCase())
        )

        return (
            <div>
                <Header />
                <div>
                    <section className="card-container">
                        {this.state.peliculas.length === 0 ? (
                            <p>Cargando...</p>
                        ) : (
                            <div>
                                <form>
                                    <input
                                        type="text"
                                        value={this.state.busqueda}
                                        onChange={(event) => this.ControlarInput(event)}
                                        placeholder="Filtrar peliculas..."
                                    />
                                </form>

                                <h2 className="alert alert-primary">Peliculas Populares</h2>
                                <section className="row cards home" id="movies">
                                    {PeliculasFiltradas.map((e, idx) => (
                                        <Card
                                            key={idx}
                                            id={e.id}
                                            title={e.original_title}
                                            desc={e.overview}
                                            img={e.poster_path}
                                            tipo="movie"
                                        />
                                    ))}
                                    <button className="btn btn-primary" onClick={() => this.masPeliculas()}>
                                        Cargar más peliculas
                                    </button>
                                </section>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        )
    }
}

export default Peliculas