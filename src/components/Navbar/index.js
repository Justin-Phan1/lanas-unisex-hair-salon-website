import './index.css'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'

const Navbar = () => {
    const[showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <div className="salon">
                <span className="name">Lana's </span>
                UNISEX Hair Salon
            </div>
            <nav className={showNav ? "mobile-show" : ""}>
                <NavLink exact={true} activeClassname="active" to="/" onClick={() => setShowNav(false)}>Home</NavLink>
                <NavLink exact={true} activeClassname="active" to="/services" onClick={() => setShowNav(false)}>Services</NavLink>
                <NavLink exact={true} activeClassname="active" to="/reviews" onClick={() => setShowNav(false)}>Reviews</NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="yellow"
                    size="3x"
                    className="close-icon"
                />
            </nav>
            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="yellow"
                size="3x"
                className="hamburger-icon"
            />
        </div>
    );
}

export default Navbar;