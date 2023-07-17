import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    

    
    return(
        <section>
            <nav className="navbar">
                <p className="brand-name">CHAMA</p>
            <ul className="list-items">
                <li>Home</li>
                <li>
                    <Link to="/AboutUs">About Us</Link></li>
                <li>Services</li>
                <li id="admin">Admin</li>
            </ul> 
            </nav>
        </section>
    )
    
}
