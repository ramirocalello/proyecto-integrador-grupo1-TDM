import { Component } from "react"
import { Link } from 'react-router-dom'
import Cookies from "universal-cookie"
const cookies = new Cookies()


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }

    controlarSubmit = (e) => {
        e.preventDefault()
        let usuario = localStorage.getItem("usuario")
        let usuarioParse = JSON.parse(usuario)
        console.log(usuarioParse)
        console.log(usuario.email)

        if (this.state.email !== usuarioParse.email) {
            alert('Este usuario no existe')
        } else if (this.state.password !== usuarioParse.password) {
            alert('La password es incorrecta')
        }
        else {
            let usuarioCheck = {
                email: this.state.email,
                password: this.state.password
            }
    
            cookies.set('usuario', JSON.stringify(usuarioCheck))
             this.props.history.push("/")
        }
    }

    controlarCambioEmail = (e) => {
        this.setState({ email: e.target.value },
            () => console.log(this.state.email)
        )
    }

    controlarCambioPassword = (e) => {
        this.setState({ password: e.target.value },
            () => console.log(this.state.email)
        )
    }


    render() {
        return (
            <div>
                <h2 className="alert alert-primary">Iniciar Sesión</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={(e) => this.controlarSubmit(e)}>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="email" name="email" onChange={(e) => this.controlarCambioEmail(e)} value={this.state.email} />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" name="password" onChange={(e) => this.controlarCambioPassword(e)} value={this.state.password}
                                />
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Ingresar</button>
                           
                        </form>
                        <p className="mt-3 text-center">¿No tenés cuenta? <Link to="/register">Registrarse</Link></p>

                    </div>
                </div>
            </div>
        )
    }

}


export default Login