import './index.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="nav-bar">
            <nav>
                <NavLink exact={true} activeClassname="active" to="/">Home</NavLink>
                <NavLink exact={true} activeClassname="active" to="/services">Services</NavLink>
                <NavLink exact={true} activeClassname="active" to="/gallery">Gallery</NavLink>
                <NavLink exact={true} activeClassname="active" to="/info">Info</NavLink>
            </nav>
        </div>
    );
}

export default Navbar;