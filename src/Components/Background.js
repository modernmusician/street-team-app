import React from "react"
import Logo from "./Logo"
import ContestPicture from "./ContestPicture"

function Background() {
    return(
        <div>
            <div className ="background-wrapper">
                <ContestPicture />
            </div>
            <div>
                <Logo />
            </div>
        </div>
        )
}

export default Background