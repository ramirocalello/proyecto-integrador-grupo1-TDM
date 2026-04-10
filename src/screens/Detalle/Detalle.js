import { Component } from "react";
import Carddetalle from "../../components/Carddetalle/Carddetalle";




class Detalle extends Component {
   constructor(props) {
       super(props);
       this.state = {
           data: {},
       }
   }
   componentDidMount() {
       let movieId = this.props.match.params.id;
       let serieId = this.props.match.params.id;

       fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8c5941c39922b8ccee40a07dc13fb0fc`)
           .then(response => response.json())
           .then(data => this.setState(
               {
                   data: data
               }
           ))
           .catch((error) => console.log(error))
           
       fetch(`https://api.themoviedb.org/3/tv/${serieId}?api_key=8c5941c39922b8ccee40a07dc13fb0fc`)
           .then(response => response.json())
           .then(data => this.setState(
               {
                   data: data
               }
           ))
           .catch((error) => console.log(error))

           


   }
   render() {
       return (
           <Carddetalle
           img={this.state.data.poster_path}
           name={this.state.data.original_title}
           rating={this.state.data.vote_average}
           estreno={this.state.data.release_date}
           duracion={this.state.data.runtime}
           sinopsis={this.state.data.overview}
           genero={this.state.data.genres}
           />
       )
   }
}


export default Detalle

