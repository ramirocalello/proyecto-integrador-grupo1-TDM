import { Component } from "react";
import Card from "../../components/Card/Card.js"
import { Link } from 'react-router-dom/cjs/react-router-dom.min.js'
import './Home.css'
import Buscador from "../../components/Buscador/Buscador.js";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            populares: [],
        }
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=8c5941c39922b8ccee40a07dc13fb0fc")
            .then(response => response.json())
            .then(data => this.setState(
                {
                    populares: data.results,
                }
            ))
            .catch((error) => console.log(error))

        fetch('https://api.themoviedb.org/3/tv/popular?api_key=8c5941c39922b8ccee40a07dc13fb0fc')
            .then(response => response.json())
            .then(data => this.setState(
                {
                    series: data.results,
                }
            ))
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div>
                <div>
                    <Buscador />
                </div>
                <section className="card-container">
                    {this.state.populares === '' ? (
                        <p>Cargando...</p>
                    ) : (
                        <div>
                            <h2 className="alert alert-primary">Peliculas Populares</h2>
                            <section className="row cards home" id="movies">
                                {this.state.populares.map((e, idx) => (
                                    <Card
                                        key={idx}
                                        id={e.id}
                                        title={e.original_title}
                                        desc={e.overview}
                                        img={e.poster_path}
                                    />
                                ))}
                                <Link to="/Peliculas" className="btn btn-primary">Ver Mas</Link>
                            </section>
                        </div>
                    )
                    }
                </section>
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
                                <Link to="/series" className="btn btn-primary">Ver Mas</Link>
                            </section>
                        </div>
                    )
                    }
                </section>
            </div>
        )
    }
}

export default Home
