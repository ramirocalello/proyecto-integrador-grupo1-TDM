import { Component } from "react"
import { Link } from "react-router-dom"


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            cookie: ""
        }
    }

    evitarSubmit = (event) => {
        event.preventDefault();
    }

    controlarCambios = (event) => {
        this.setState({valor: event.target.value })
    }

    render() {
        return (
            <div>
                <h2>Registrarse</h2>
                <form onSubmit={(event) => this.evitarSubmit(event)}>
                    <label>Name or email:</label>
                    <input type="email" name="email" onChange={(event) => this.controlarCambios(event)} value={this.state.email}></input>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={(event) => this.controlarCambios(event)} value={this.state.password}></input>
                    <Link to="/login"><button type="button">Registrarse</button></Link>
                </form>
            </div>
        )

    }
}

export default Register