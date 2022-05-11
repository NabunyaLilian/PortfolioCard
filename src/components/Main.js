import React from "react"
import UserInfo from "./UserInfo"

export default function Main(){
    return(
        <main>
            <img className ="main--photo" src="../images/profile-photo.png"/>
            <UserInfo />
        </main>
    )
}