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
            favorito: false
        }
    }

    componentDidMount() {
        let keyStorage = this.props.tipo === "movie" ? "favPeliculas" : "favSeries"

        let favoritos = localStorage.getItem(keyStorage)

        if (favoritos !== null) {
            let favParse = JSON.parse(favoritos)

            let existe = favParse.filter((id) => id === this.props.id)

            if (existe.length > 0) {
                this.setState({
                    favorito: true
                })
            }
        }
    }

    descipcion(e) {
        e.preventDefault()
        this.setState({
            className: this.state.className === "hidden-p" ? "visible-p" : "hidden-p",
            texto: this.state.texto === "Ver Descpricíon" ? "Minimizar" : "Ver Descpricíon"
        })
    }

    agregarFavoritos(id) {
        let keyStorage = this.props.tipo === "movie" ? "favPeliculas" : "favSeries"

        let storage = localStorage.getItem(keyStorage)

        if (storage !== null) {
            let storageParse = JSON.parse(storage)

            let existe = storageParse.filter((elemento) => elemento === id)

            if (existe.length === 0) {
                storageParse.push(id)
                localStorage.setItem(keyStorage, JSON.stringify(storageParse))
            }
        } else {
            let arrayNuevo = [id]
            localStorage.setItem(keyStorage, JSON.stringify(arrayNuevo))
        }

        this.setState({
            favorito: true
        })
    }

    sacarFavoritos(id) {
        let keyStorage = this.props.tipo === "movie" ? "favPeliculas" : "favSeries"

        let favoritos = localStorage.getItem(keyStorage)

        if (favoritos !== null) {
            let favParse = JSON.parse(favoritos)

            let nuevoArray = favParse.filter((elemento) => elemento !== id)

            localStorage.setItem(keyStorage, JSON.stringify(nuevoArray))
        }

        this.setState({
            favorito: false
        })
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
                        <button className="btn btn-primary" onClick={(e) => this.descipcion(e)}>
                            {this.state.texto}
                        </button>

                        <Link to={`/detalle/${this.props.id}`} className="btn btn-primary">
                            Ir al detalle
                        </Link>

                        {this.state.cookie !== undefined ? (
                            this.state.favorito ? (
                                <button
                                    className="btn alert-primary"
                                    onClick={() => this.sacarFavoritos(this.props.id)}
                                >
                                    Sacar
                                </button>
                            ) : (
                                <button
                                    className="btn alert-primary"
                                    onClick={() => this.agregarFavoritos(this.props.id)}
                                >
                                    Agregar
                                </button>
                            )
                        ) : (
                            <button className="hidden-btn"></button>
                        )}
                    </div>
                </div>
            </article>
        );
    }
}

export default Card