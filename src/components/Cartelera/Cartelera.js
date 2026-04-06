import { Component } from "react";
import './Cartelera.css'

class Cartelera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'hidden-p',
            texto: 'Ver Descpricíon',
            activeClass: '',
        }
    }
    descipcion(e) {
        e.preventDefault()
        this.setState({
            className: this.state.className === "hidden-p" ? "visible-p" : "hidden-p",
            texto: this.state.texto === "Ver Descpricíon" ? "Minimizar " : "Ver Descpricíon"
        })
    }

    render() {
        return (
            <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w342${this.props.img}`} class="card-img-top"
                    alt="..." />
                <div className="cardBody">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className={`card-text ${this.state.className}`}>{this.props.desc}</p>
                    <div className="link-card">
                        <a href={``} className="btn btn-primary" onClick={(e)=> this.descipcion(e)}>{this.state.texto}</a>
                        <a href={``} className="btn btn-primary">Ir al detalle</a>
                        <a href="" className="btn alert-primary">🩶</a>
                    </div>
                </div>
            </article>
        );
    };
}
export default Cartelera