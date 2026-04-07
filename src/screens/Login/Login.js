import { Component } from "react"

class Login extends Component {
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

        event.target.name === "email"
            ? this.setState({ email: event.target.value })
            : this.setState({ password: event.target.value })
    }

    render() {
        return (
            <div>
                <h2>Iniciar sesión</h2>

                <form onSubmit={(event) => this.evitarSubmit(event)}>

                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        onChange={(event) => this.controlarCambios(event)} 
                        value={this.state.email}
                    />

                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={(event) => this.controlarCambios(event)} 
                        value={this.state.password}
                    />

                    <input type="submit" value="Ingresar" />

                </form>
            </div>
        )
    }
}

export default Login