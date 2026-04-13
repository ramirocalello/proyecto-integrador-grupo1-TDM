import { Component } from "react";
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritos: []
        }
    }

    componentDidMount() {
        let favoritos = cookies.get('favoritos')

        if (favoritos !== undefined) {
            favoritos = JSON.parse(favoritos)
        } else {
            favoritos = []
        }

        this.setState({
            favoritos: favoritos
        })
    }

    render() {
        return (
            <div>
                <h2>Favoritos</h2>

                {this.state.favoritos.length === 0 ? (
                    <p>No hay favoritos</p>
                ) : (
                    this.state.favoritos.map((id, idx) => (
                        <p key={idx}>ID: {id}</p>
                    ))
                )}
            </div>
        )
    }
}

export default Favoritos