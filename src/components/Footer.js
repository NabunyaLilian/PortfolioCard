import React from "react"
import twitter from "../images/twitter-icon.png"
import facebook from "../images/fb-icon.png"
import instagram from "../images/instagram-icon.png"
import github from "../images/github-icon.png"

export default function Footer(){
    return(
        <footer>
            <a href="#"><img src={twitter} alt="twitter icon"/></a>
            <a href="#"><img src={facebook} alt="facebook icon"/></a>
            <a href="#"><img src={instagram} alt="instagram icon"/></a>
            <a href="#"><img src={github} alt="github icon"/></a>
        </footer>
    )
}