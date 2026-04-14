import { Component } from "react";
import Card from "../../components/Card/Card.js";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritos: []
        }
    }

    componentDidMount() {
        let favs = localStorage.getItem('favoritos')

        if (favs !== null) {
            let favoritosParseados = JSON.parse(favs)

            favoritosParseados.map((fav, idx) =>
                fetch(`https://api.themoviedb.org/3/movie/${fav}?api_key=8c5941c39922b8ccee40a07dc13fb0fc`)
                    .then(response => response.json())
                    .then(data => this.setState({
                        favoritos: this.state.favoritos.concat(data)
                    }))
                    .catch((error) => console.log(error))
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Favoritos</h2>

                {this.state.favoritos.length === 0 ? (
                    <p>No hay favoritos</p>
                ) : (
                    this.state.favoritos.map((peli, idx) => (
                        <Card
                            key={idx}
                            id={peli.id}
                            title={peli.original_title}
                            desc={peli.overview}
                            img={peli.poster_path}
                        />
                    ))
                )}
            </div>
        )
    }
}

export default Favoritos