function Carddetalle(props) {
    return (
        <div>
            <h2 class="alert alert-primary">{props.name}</h2>
            <section className="row">
                <img className="col-md-6" src={`https://image.tmdb.org/t/p/w342${props.img}`} alt="" />
                <section className="col-md-6 info">
                    <h3>Descprcion</h3>
                    <p className="description">{props.sinopsis}</p>
                    <p className="mt-0 mb-0" id="release-date">{props.estreno}</p>
                    <p className="mt-0" id="votes">{props.rating}</p>
                    <p className="mt-0 mb-0 length">{props.duracion}</p>
                    {/* <ul>
                        {props.genero === '' ? <p>Cargando...</p>:
                        props.genero.map((e, idx) =>
                            <li key={idx}>{e.name}</li>
                        )}
                    </ul> */}
                </section>
            </section>
        </div>
    )
}


export default Carddetalle