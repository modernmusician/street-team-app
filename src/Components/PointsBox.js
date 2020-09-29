import React, { useState } from "react"

function PointsBox({totalPoints,includeText}) {
    
    let pointsInfoText = "";
    
    if(includeText){
        if (totalPoints === 0){
            pointsInfoText="Register now and start earning points towards your entry.";
        }
            
            else if (totalPoints > 0 && totalPoints < 10000) {
                
                pointsInfoText="wow you're doing great pal!"
            }
            
            else if (totalPoints >= 10000) {
                pointsInfoText="you're totally gonna win"
            }
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