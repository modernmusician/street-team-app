import React, {useState} from "react"
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"
import '../App.css';
import Background from "./Background"
import Countdown from "./Countdown"
import ReactDeadline from "./ReactDeadline"

import { Router, Link } from "@reach/router";


function OptinCard() {
    
    return(
        <div>
          <Card>
            <Card.Img variant="top" src="../baby.png"/>
            <Card.Body class="card-container">
              <Card.Title class="headline-paragraph-text">Win A Baby</Card.Title>
              <Card.Text class="card-text">
                Enter for a chance to win a happy, healthy baby girl!
              </Card.Text>
              <Countdown hours="1" minutes="10" />
              <ReactDeadline />
              <Button class="btn active btn-default">
              <Link to="/contest">Enter To Win > </Link>
              </Button>
            </Card.Body>
          </Card>
          </div>
        )
}

export default OptinCard