import { Component } from "react"
import { Link } from "react-router-dom"
import Header from '../../components/Header/Header.js'


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            emailUsados: "",
            password: "",
        }
    }

       componentDidMount() {
       let usarios = localStorage.getItem('usuarios')
       let usariosParce = JSON.parse(usarios)
       this.setState({
           usarios: usariosParce
         })
       console.log(this.state.usarios);
    }

       condicionesSubmit = (e) => {
       e.preventDefault();


       if (this.state.email === this.state.emailUsados) {
           alert('El email ingresado ya existe');
       } else if (this.state.password.length < 5) {
           alert('La contraseña debe tener al menos 5 caracteres');
       } else {
            let nuevoUsuario = {
            email: this.state.email,
            password: this.state.password
            }

        localStorage.setItem('usuario', JSON.stringify(nuevoUsuario));
        this.props.history.push("/Login")
        }
    }

    controlarcambioEmail =(e) =>{
        this.setState({email: e.target.value},
            () => console.log(this.state.email)
        )
    }

    controlarcambioPassword =(e) =>{
        this.setState({password: e.target.value},
            () => console.log(this.state.email)
        )
    }

    render() {
        return (
            <div>
            <Header/>
            <div>
                <h2 className="alert alert-primary">Registrarse</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={(e) => this.condicionesSubmit(e)}>
                            <div className="form-group">
                                
                                <label>Email:</label>
                                <input type="email" onChange={(e) => this.controlarcambioEmail(e)} value={this.state.email}/>
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="text" onChange={(e) => this.controlarcambioPassword(e)} value={this.state.password}/>
                            </div>
                            
                            <button type="submit">Registrarse</button> 
                        </form>
                            <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link></p>
                    </div>
                </div>
            </div>
            </div>
        )

    }
}

export default Register