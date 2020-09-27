import React from "react"
import { Link } from '@reach/router';
import Button from 'react-bootstrap/Button';


function ActionPointsButton({path,text,icon,points,textBoxColor,pointsBoxColor,buttonStyle}) {
    
    // const iconComponent = icon;
    
    return(
        <div class="button-container">
          <Link className="link-button" to={path}>
            <Button className="btn-default facebook-registration-button button-text-box">
              <div class= {"button-text-box " + textBoxColor}>
                <div class={"button-icon " + buttonStyle}>
                    {React.createElement(icon)}
                </div>
                <p class={"button-text " + buttonStyle}>
                  {text}
                </p>
              </div>
              <div class={"button-points-box " + pointsBoxColor}>
                  <h1 class ={"points-total subtle-center " + buttonStyle}> +{points} </h1>
                  <h5 class={"countdown-label " + buttonStyle} > points </h5>
              </div>
            </Button>
          </Link>
        </div>
        )
}

export default ActionPointsButton