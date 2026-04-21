import { Component } from "react";
import Card from "../../components/Card/Card.js"
import Header from '../../components/Header/Header.js'

class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            paginaActual: 1,
            busqueda: ""
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8c5941c39922b8ccee40a07dc13fb0fc')
            .then(response => response.json())
            .then(data => this.setState({
                series: data.results,
                paginaActual: 2,
            }))
            .catch((error) => console.log(error))
    }

    masSeries() {
        fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&sort_by=popularity.desc&api_key=8c5941c39922b8ccee40a07dc13fb0fc&page=${this.state.paginaActual}`)
            .then(response => response.json())
            .then(data => this.setState({
                series: this.state.series.concat(data.results),
                paginaActual: this.state.paginaActual + 1
            }))
            .catch((error) => console.log(error))
    }

    controlarInput(event) {
        this.setState({
            busqueda: event.target.value
        })
    }

    render() {
        let seriesFiltradas = this.state.series.filter((serie) =>
            serie.name.toLowerCase().includes(this.state.busqueda.toLowerCase())
        )

        return (
            <div>
                <Header />
                <div>
                    <section className="card-container">
                        {this.state.series.length === 0 ? (
                            <p>Cargando...</p>
                        ) : (
                            <div>
                                <h2 className="alert alert-primary">Series Populares</h2>

                                <form>
                                    <input
                                        type="text"
                                        value={this.state.busqueda}
                                        onChange={(event) => this.controlarInput(event)}
                                        placeholder="Filtrar series..."
                                    />
                                </form>

                                <section className="row cards home" id="movies">
                                    {seriesFiltradas.map((e, idx) => (
                                        <Card
                                            key={idx}
                                            id={e.id}
                                            title={e.name}
                                            desc={e.overview}
                                            img={e.poster_path}
                                            tipo="tv"
                                        />
                                    ))}
                                    <button className="btn btn-primary" onClick={() => this.masSeries()}>
                                        Cargar más series
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

export default Series