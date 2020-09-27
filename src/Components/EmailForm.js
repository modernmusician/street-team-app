import React from "react"
import Button from 'react-bootstrap/Button';
import { IoIosCheckbox } from "react-icons/io"

function EmailForm () {
    return(
        <div> 
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1"></label>
                <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Full Name..."/>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1"></label>
                <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Your Email Address..." />
              </div>
              <div class="form-group">
                <label for="exampleInputPhone1"></label>
                <input type="phone" class="form-control" id="exampleInputPhone1" placeholder="Your Phone Number..." />
              </div>
            <Button type="Submit" className="btn-default complete-registration-button button-text-box">
              <div class= "button-text-box dark">
                <div class="button-icon">
                    <IoIosCheckbox />
                </div>
                <p class="button-text dark">
                  Complete Registration
                </p>
              </div>
              <div class="button-points-box dark">
                  <h1 class ="points-total subtle-center dark"> +20 </h1>
                  <h5 class="countdown-label dark" > points </h5>
              </div>
            </Button>
            </form>
        </div>
        )
}

export default EmailForm