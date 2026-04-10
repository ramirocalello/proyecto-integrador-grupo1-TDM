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
        this.setState({ valor: event.target.value })
    }

    render() {
        return (
            <div>
                <h2 className="alert alert-primary">Registrarse</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={(event) => this.evitarSubmit(event)}>
                            <div className="form-group">
                                <label>Name or email:</label>
                                <input type="email" name="email" onChange={(event) => this.controlarCambios(event)} value={this.state.email}></input>
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" name="password" onChange={(event) => this.controlarCambios(event)} value={this.state.password}></input>
                            </div>
                            <Link to="/login"><button type="button">Registrarse</button></Link>
                        </form>
                        <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to="/Login">Iniciar sesión</Link></p>
                    </div>
                </div>
            </div>
        )

    }
}

export default Register