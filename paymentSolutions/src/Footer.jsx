import React from "react";
import facebook from "./assets/iconsSocial/icons8-facebook-48.png"
import instagram from "./assets/iconsSocial/icons8-instagram.png"
import twitter from "./assets/iconsSocial/icons8-twitter-48.png"


export default function Footer() {
    return(
        <section id="footer">
            <div className="social-icons">
               <img src={facebook}/> 
               <img src={instagram}/> 
               <img src={twitter}/> 
            </div>
        </section>
    )
}