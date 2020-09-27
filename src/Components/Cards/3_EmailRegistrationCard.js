// import '.../App.css';

import { Link} from '@reach/router';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

// import Background from './Background';
import Countdown from '../Countdown';
import ReactDeadline from '../ReactDeadline';
import PointsBox from "../PointsBox"
import ActionPointsButton from "../ActionPointsButton"
import { IoIosCheckbox } from "react-icons/io"
import EmailForm from "../EmailForm";


function EmailRegistrationCard({contestHeadline,contestDescription,buttonText,contestDeadline,contestImg}) {
  return (
    <div>
      <Card>
        <div class="headline-top">
          <div class= "left-align top-headline-padding">
            {contestHeadline}
          </div>
          <div class="top-countdown">
          <ReactDeadline startDate={contestDeadline} />
          </div>
        </div>
        <Card.Body>
          <div class="card-container-text">
            <Card.Title className="register-headline">
              <h3> Register </h3>
              <hr width="18%" align="left" margin-top="0"/>
              <h4> How can we reach you if you win? </h4>
            </Card.Title>
          <div class="register-button-box">
          <EmailForm />
          </div>
            <Card.Text class="text-small fade-light">
              *We promise to keep your privacy safe.
            </Card.Text>
          </div>
          <PointsBox totalPoints="0" />
        </Card.Body>
      </Card>
    </div>
  );
}

export default EmailRegistrationCard;
