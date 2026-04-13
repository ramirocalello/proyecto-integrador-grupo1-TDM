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
            cookie: cookies.getAll()
        }
    }

    descipcion(e) {
        e.preventDefault()
        this.setState({
            className: this.state.className === "hidden-p" ? "visible-p" : "hidden-p",
            texto: this.state.texto === "Ver Descpricíon" ? "Minimizar " : "Ver Descpricíon"
        })
    }

    favoritos(e) {
    let favoritos = cookies.get('favoritos')

    if (favoritos !== undefined) {
        favoritos = JSON.parse(favoritos)
    } else {
        favoritos = []
    }
    favoritos.push(this.props.id)
    cookies.set('favoritos', JSON.stringify(favoritos))
}
    render() {
        
        return (
            <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w342${this.props.img}`} className="card-img-top"
                    alt="..." />
                <div className="cardBody">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className={`card-text ${this.state.className}`}>{this.props.desc}</p>
                    <div className="link-card">
                        <button className="btn btn-primary" onClick={(e)=> this.descipcion(e)}>
                            {this.state.texto}
                        </button>

                        <Link to={`/detalle/${this.props.id}`} className="btn btn-primary">
                            Ir al detalle
                        </Link>

                        {cookies.get("user") === undefined ? (
                            <button className="hidden-btn"></button>
                        ) : (
                            <button 
                                onClick={(e) => this.favoritos(e)} 
                                className={`btn alert-primary ${this.state.favoritosDisplay}`}
                            >
                                🩶
                            </button>
                            
                        )
                        }
                    
                    </div>
                </div>
            </article>
        );
    };
}

export default Card