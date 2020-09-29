import React from "react"

function PointsBox({totalPoints}) {
    
    const pointsInfoText = ""
    
    if (totalPoints === 0){
    return({
        pointsInfoText: "omg it worked!"
        })
    }
    
    return(
        <div className="points-container">
            <div className="points-number-box">
                <h1 className="points-total"> {totalPoints} </h1>
                <h5 className="countdown-label" > points </h5>
            </div>
            <div className="points-info-box">
                <p className="points-info-text fade-light"> {pointsInfoText} </p>
            </div>
        </div>
        )
}

export default PointsBox