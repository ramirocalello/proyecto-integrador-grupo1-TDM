import { Component } from "react";
import Elementosnav from "../Elementosnav/Elementosnav"


class Header extends Component {
 constructor(props) {
   super(props);
   this.state = {
     permanente: [{ name: "Home", path: "/" }],
     condicionales: [{ name: "Login", path: "/login" }, { name: "Crea tu cuenta", path: "/crear" }, { name: "Favoritos", path: "/favoritos" }],
     cookie: "",
   }
 }
 render() {
   return (
     <nav>
       <ul className="nav nav-tabs my-4">
         <Elementosnav
           name={this.state.permanente[0].name}
           path={this.state.permanente[0].path}
         />


         {this.state.condicionales.map((e, i) => (
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



