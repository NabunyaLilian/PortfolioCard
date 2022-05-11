import React from "react"
import twitter from "../images/twitter-icon.png"
import facebook from "../images/fb-icon.png"
import instagram from "../images/instagram-icon.png"
import github from "../images/github-icon.png"

export default function Footer(){
    return(
        <footer>
            <a><img src={twitter}/></a>
            <a><img src={facebook}/></a>
            <a><img src={instagram}/></a>
            <a><img src={github}/></a>
        </footer>
    )
}