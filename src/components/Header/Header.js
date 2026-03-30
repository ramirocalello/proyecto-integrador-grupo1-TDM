import ElementoNav from "../ElementoNav/ElementoNav"

let attrElementos = [{name:'ADMIN'}, {name:'Pages'}, {name:'Charts'}, {name:'Tables'}]

function Header(props) {
    return (
        <nav>
            <ul className="main-nav">
                {attrElementos.map((e, idx) => (
                <ElementoNav 
                key={idx}
                elemento = {e.name}
                />
            ))}
            </ul>
            <ul className="user">
                <li>Nombre usuario <img src="./img/user.jpg" alt="" /></li>
            </ul>
        </nav>
    )
}

export default Header

