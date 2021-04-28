import React, {useState, useCallback} from "react"
import Button from 'react-bootstrap/Button';

import { IoIosCheckbox } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLibraryMusic } from "react-icons/md";


function ActionButton({actionButtonConfig}) {
   //this is creating a local 
   // eventually this should use a database record for if a user has taken an action, for now it's just local state
  const [completed, setCompleted] = useState(false);
  const handleClick = useCallback(
    (e) => {
      setCompleted(true);
      if (actionButtonConfig.targetURL!=undefined){
        console.log(actionButtonConfig.targetURL);
        window.open(actionButtonConfig.targetURL, "_blank");
      }
      //here is where we will put logic for other ActionButtonServices
    },
    []
  );
   
  //define the icon component based on the actionButtonCongif.buttonIcon parameter
  //note, this is where we would need to define additional icons
    var icon = MdLibraryMusic;
    if(actionButtonConfig.buttonIcon){
      switch(actionButtonConfig.buttonIcon) {
        case "Spotify":
          icon = FaSpotify
          break;
        case "CheckBox":
          icon = IoIosCheckbox;
          break;
        default:
          icon = MdLibraryMusic; //default icon
        }
    }
    console.log("in the action button component")
    console.log("action Button data is:" )
    console.log(actionButtonConfig)
    return(
        <div id={actionButtonConfig.id + "ButtonDiv"} className="button-container">
            <Button
            className={"btn-default facebook-registration-button button-text-box "}
            onClick={handleClick}
            >
              <div className="button-text-box" style={{
                    backgroundColor: actionButtonConfig.backgroundColor,
                  }}>
                <div className={"button-icon " + actionButtonConfig.buttonIcon}>
                    {React.createElement(icon)}
                </div>
                
                <p className={"button-text"} style={{
                    color: actionButtonConfig.textColor,
                  }}>
                  {completed ?  actionButtonConfig.postActionText : actionButtonConfig.preActionText}
                </p>
              </div>
              <div className={"button-points-box "} style={{
                    color: actionButtonConfig.textColor,
                    background: `linear-gradient(to bottom right, #efefef 0%, ${actionButtonConfig.backgroundColor} 100%)`,
                  }}>
                  <h1 className=" subtle-center" > 100 </h1>
                  <h5 className="countdown-label points-label"> points </h5>
              </div>
            </Button>
        </div>
        )
}

export default ActionButton