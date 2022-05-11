import React from "react"
import UserInfo from "./UserInfo"
import photo from "../images/profile-photo.png"

export default function Main(){
    return(
        <main>
            <img className ="main--photo" src={photo}/>
            <UserInfo />
        </main>
    )
}