import { BrowserRouter, Link, Route, Swich } from 'react-router-dom';

function Elementosnav(props) {
    return (
        <li className="nav-item">
        <Link to={`${props.path}`} >{props.elemento}</Link>
        </li>
    )
}

export default Elementosnav