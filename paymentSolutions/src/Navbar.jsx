import React from "react";

export default function Navbar() {
    
    return(
        <section>
            <nav className="navbar">
                <p className="brand-name">CHAMA</p>
            <ul className="list-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li id="admin">Admin</li>
            </ul> 
            </nav>
        </section>
    )
    
}
