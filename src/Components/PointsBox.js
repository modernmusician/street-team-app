import React from "react"

function PointsBox({totalPoints}) {
    
    const pointsInfoText = ""
    
    if (totalPoints === 0){
    return(
        pointsInfoText = "omg it worked!"
        )
    }
    
    return(
        <div class="points-container">
            <div class="points-number-box">
                <h1 class ="points-total"> {totalPoints} </h1>
                <h5 class="countdown-label" > points </h5>
            </div>
            <div class="points-info-box">
                <p class="points-info-text fade-light"> {pointsInfoText} </p>
            </div>
        </div>
        )
}

export default PointsBox