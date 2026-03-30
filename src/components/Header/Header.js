import Elementosnav from "../Elementosnav/Elementosnav"

let elemHeader = [{name:"home"}, {name:"login"}, {name:"crear"}, {name:"favoritos"}]

function Header(props) {
    return (
        <nav>
            <ul class="nav nav-tabs my-4">
            {elemHeader.map((e, idx) => 
            <Elementosnav
            key={idx}
            elemento={e.name}
            />)}
        </ul>
        </nav>
)
}

export default Header

