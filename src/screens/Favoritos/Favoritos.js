import { Component } from "react";
import Card from "../../components/Card/Card.js";
import Header from '../../components/Header/Header.js'

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            series: []
        }
    }

    componentDidMount() {

        let favsP = localStorage.getItem('favPeliculas')

        if (favsP !== null) {
            let peliculasParseadas = JSON.parse(favsP)

            peliculasParseadas.map((id) =>
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8c5941c39922b8ccee40a07dc13fb0fc`)
                    .then(response => response.json())
                    .then(data => {
                        this.setState((estadoAnterior) => ({
                            peliculas: estadoAnterior.peliculas.concat(data)
                        }))
                    })
                    .catch(error => console.log(error))
            )
        }

        let favsS = localStorage.getItem('favSeries')

        if (favsS !== null) {
            let seriesParseadas = JSON.parse(favsS)

            seriesParseadas.map((id) =>
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=8c5941c39922b8ccee40a07dc13fb0fc`)
                    .then(response => response.json())
                    .then(data => {
                        this.setState((estadoAnterior) => ({
                            series: estadoAnterior.series.concat(data)
                        }))
                    })
                    .catch(error => console.log(error))
            )
        }
    }

    render() {
        return (
            <div>
                <Header />

                <h2>Películas favoritas</h2>
                {this.state.peliculas.length === 0 ? (
                    <p>No hay películas favoritas</p>
                ) : (
                    this.state.peliculas.map((peli, idx) => (
                        <Card
                            key={idx}
                            id={peli.id}
                            title={peli.title}
                            desc={peli.overview}
                            img={peli.poster_path}
                            tipo="movie"
                        />
                    ))
                )}

                <h2>Series favoritas</h2>
                {this.state.series.length === 0 ? (
                    <p>No hay series favoritas</p>
                ) : (
                    this.state.series.map((serie, idx) => (
                        <Card
                            key={idx}
                            id={serie.id}
                            title={serie.name}
                            desc={serie.overview}
                            img={serie.poster_path}
                            tipo="tv"
                        />
                    ))
                )}
            </div>
        )
    }
}

export default Favoritos