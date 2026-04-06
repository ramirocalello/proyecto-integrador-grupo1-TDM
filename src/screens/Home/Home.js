import { Component } from "react";
import Card from "../Card/Card.js";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartelera: [],
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

            fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2&api_key=8c5941c39922b8ccee40a07dc13fb0fc')
            .then(response => response.json())
            .then(data => this.setState(
                {
                    cartelera: data.results,
                }
            ))
            .catch((error) => console.log(error))
    }    

    render() {
        return (
            <div>
            <section className="card-container">
                {this.state.populares === '' ? (
                    <p>Cargando...</p>
                ) : (
                    <div>
                   <h2 className="alert alert-primary">Peliculas Populares</h2>
                    <section className="row cards" id="movies">
                    {this.state.populares.map((e, idx) => (
                        <Card
                        key={idx}
                        title={e.original_title}
                        desc={e.overview}
                        img={e.poster_path}
                        />
                    ))}
                    </section>
                    </div>
                )
                }
            </section>
            <section className="card-container">
                {this.state.cartelera === '' ? (
                    <p>Cargando...</p>
                ) : (
                    <div>
                   <h2 className="alert alert-primary">Peliculas en cartelera</h2>
                    <section className="row cards" id="movies">
                    {this.state.cartelera.map((e, idx) => (
                        <Card
                        key={idx}
                        title={e.original_title}
                        desc={e.overview}
                        img={e.poster_path}
                        />
                    ))}
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
