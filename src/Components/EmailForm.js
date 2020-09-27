import React from "react"
import Button from 'react-bootstrap/Button';
import { IoIosCheckbox } from "react-icons/io"

function EmailForm () {
    return(
        <div> 
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1"></label>
                <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Full Name..."/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1"></label>
                <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Your Email Address..." />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPhone1"></label>
                <input type="phone" className="form-control" id="exampleInputPhone1" placeholder="Your Phone Number..." />
              </div>
            <Button type="Submit" className="btn-default complete-registration-button button-text-box">
              <div className= "button-text-box dark">
                <div className="button-icon">
                    <IoIosCheckbox />
                </div>
                <p className="button-text dark">
                  Complete Registration
                </p>
              </div>
              <div className="button-points-box dark">
                  <h1 className="points-total subtle-center dark"> +20 </h1>
                  <h5 className="countdown-label dark" > points </h5>
              </div>
            </Button>
            </form>
        </div>
        )
}

export default EmailForm