import { Component } from "react";
import Elementosnav from "../Elementosnav/Elementosnav"
import Busquedad from "../Busquedad/Busquedad";
import { Link } from "react-router-dom";

class Header extends Component {
 constructor(props) {
   super(props);
   this.state = {
     permanente: [{ name: "Home", path: "/" }, { name: "Login", path: "/login" }, { name: "register", path: "/register" }, { name: "Favoritos", path: "/favoritos" }],
     cookie: "",
   }
 }
 render() {
   return (
     <nav>
       <ul className="nav nav-tabs my-4">
        <Link to="/" exact="true" className="stremeo">STREMEO</Link>
        <Link to="/register" exact="true" className="register">CREAR CUENTA</Link>
        <Link to="/login" exact="true" className="login">INICIAR SESION</Link>
         {this.state.permanente.map((e, i) => (
           <Elementosnav
             key={i}
             name={e.name}
             path={e.path}
           />
         ))}
       </ul>
     </nav>
   );
 }
}


export default Header;



