import { Component } from "react";

class Cartelera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'hidden-p',
            texto: 'Ver Mas',
            activeClass: '',
        }
    }
    visible(e) {
        this.setState({
            className: this.state.className === "hidden-p" ? "visible-p" : "hidden-p",
            texto: this.state.texto === "Ver Mas" ? "Ver Menos" : "Ver Mas"
        })
    }

    seleccion(){
        this.setState({
            activeClass: this.state.activeClass === '' ? "active" : ''
        })
    }

    render() {
        return (
            <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w342${this.props.img}`} class="card-img-top"
                    alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className={`card-text ${this.state.className}`}>{this.props.desc}</p>
                    <p onClick={(e) => this.visible(e)}>
                    {this.state.texto}
                    </p>
                    <a href="" className="btn alert-primary">Ir a detalle</a>
                    <a href="" className="btn alert-primary">Agregar a favoritos</a>
                </div>
            </article>
        );
    };
}
export default Cartelera