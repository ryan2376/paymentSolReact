import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    

    
    return(
        <section>
            <nav className="navbar">
                <p className="brand-name">CHAMA</p>
            <ul className="list-items">
                <li> <Link id="Home" to="/">Home</Link> </li>

                <li> <Link id="About" to="/AboutUs">About Us</Link></li>
                <li>Services</li>
                <li id="admin">Admin</li>
            </ul> 
            </nav>
        </section>
    )
    
}
