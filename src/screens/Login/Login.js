import { Component } from "react"
import { Link } from 'react-router-dom'

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
                <h2 className="alert alert-primary">Iniciar sesión</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={(event) => this.evitarSubmit(event)}>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="email" name="email" onChange={(event) => this.controlarCambios(event)} value={this.state.email} />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" name="password" onChange={(event) => this.controlarCambios(event)} value={this.state.password}
                                />
                            </div>
                            <button className="btn btn-primary btn-block" type="submit" value="Ingresar"></button>
                        </form>
                        <p className="mt-3 text-center">¿No tenés cuenta? <Link href="register.html">Registrarse</Link></p>

                    </div>
                </div>
            </div>
        )
    }
}

export default Login