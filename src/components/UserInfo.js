import React from "react"

export default function UserInfo(){
    return(
        <div className="main--user-info">
            <h1>Laura Smith</h1>
            <h4>Frontend Developer</h4>
            <a><small>laurasmith.website</small></a>
            <div className="main--btns">
                <button className="main--email_btn">
                    <img src="../images/mail-icon.png"/>Email
                </button>
                <button className="main--social_btn">
                    <img src="../images/linkedin-icon.png"/>LinkedIn
                </button>
            </div>
            <h3>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h3>Interests</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    )
}