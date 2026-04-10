function Carddetalle(props) {
    let generos = props.genero
    console.log(generos);


    return (
        <div>
            <h2 className="alert alert-primary">{props.name}</h2>
            <section className="row">
                <img className="col-md-6" src={`https://image.tmdb.org/t/p/w342${props.img}`} alt="" />
                <section className="col-md-6 info">
                    <h3>Descprcion</h3>
                    <p className="description">{props.sinopsis}</p>
                    <p className="mt-0 mb-0" id="release-date">Fecha de estreno: {props.estreno}</p>
                    <p className="mt-0" id="votes">Rating: {props.rating}</p>
                    <p className="mt-0 mb-0 length">Duracion: {props.duracion} min</p>
                    <ul>
                        {!generos ? (<li>Cargando...</li> 
                        ) : (
                            generos.map((e, idx) =>
                        <li key={idx}>{e.name}</li>)
                        )}
                    </ul>
                </section>
            </section>
        </div>
    )
}


export default Carddetalle