import { Link } from 'react-router-dom/cjs/react-router-dom.min.js'
import { Component } from "react";
import './Card.css'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'hidden-p',
            texto: 'Ver Descpricíon',
            cookie: cookies.get('usuario'),
            favorito: false,
        }
    }

    componentDidMount() {
        let favoritos = localStorage.getItem("favPeliculas")
        let favParse = JSON.parse(favoritos)

        if (favParse !== null && favParse.includes(this.props.id)) {
            this.setState({
                favorito: true
            })
        }
    }

    descipcion = (e) => {
        e.preventDefault()
        this.setState({
            className: this.state.className === "hidden-p" ? "visible-p" : "hidden-p",
            texto: this.state.texto === "Ver Descpricíon" ? "Minimizar" : "Ver Descpricíon"
        })
    }

    agregarFavoritos = (id) => {
        let storage = localStorage.getItem("favPeliculas")
        let storageParse = JSON.parse(storage)

        if (storageParse === null) {
            let pelicula = [id]
            let peliculaString = JSON.stringify(pelicula)
            localStorage.setItem("favPeliculas", peliculaString)
        } else {
            storageParse.push(id)
            let storageString = JSON.stringify(storageParse)
            localStorage.setItem("favPeliculas", storageString)
        }

        this.setState({ favorito: true })
    }

    sacarFavoritos = (id) => {
        let favoritos = localStorage.getItem("favPeliculas")
        let favParse = JSON.parse(favoritos)

        let storageFilter = favParse.filter(function (pelicula) {
            return pelicula !== id;
        });

        let storageString = JSON.stringify(storageFilter);
        localStorage.setItem("favPeliculas", storageString)

        this.setState({ favorito: false });
    }

    render() {
        return (
            <article className="single-card-movie">
                <img
                    src={`https://image.tmdb.org/t/p/w342${this.props.img}`}
                    className="card-img-top"
                    alt={this.props.title}
                />
                <div className="cardBody">
                    <h5 className="card-title">{this.props.title}</h5>

                    <p className={`card-text ${this.state.className}`}>
                        {this.props.desc}
                    </p>

                    <div className="link-card">
                        <button
                            className="btn btn-primary"
                            onClick={this.descipcion}
                        >
                            {this.state.texto}
                        </button>

                        <Link to={`/detalle/${this.props.id}`} className="btn btn-primary">
                            Ir al detalle
                        </Link>

                        {this.state.favorito ? (
                            <button
                                className="SacarFav"
                                onClick={() => this.sacarFavoritos(this.props.id)}
                            >
                                Sacar de Favoritos
                            </button>
                        ) : (
                            <button
                                className="AgregarFav"
                                onClick={() => this.agregarFavoritos(this.props.id)}
                            >
                                Agregar a Favoritos
                            </button>
                        )}
                    </div>
                </div>
            </article>
        );
    }
}

export default Card