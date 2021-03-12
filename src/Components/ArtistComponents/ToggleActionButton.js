import React, { useState, useRef } from 'react';

import { Link } from '@reach/router';
import { FaAngleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from "react-bootstrap/Modal";

import styled from 'styled-components';

import NavbarSteps from './NavbarSteps';

import Checkfield from "./../Checkfield";

const ToggleActionButton = ({
      label,
      id,
      value,
      setSave,
      onChange,
      icon,
      iconStyle,
      description,
      authenticated,
      setAuthenticated,
      handleAuthenticated,
}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [inputValues, setInputValues] = useState({
    contestHeadline: '', 
    contestDescription: '',
    buttonText: '',
    contestDeadline: '',
    contestImg: '',
  });

const handleOnChange = event => {
  const { name, value } = event.target;
  setInputValues({ ...inputValues, [name]: value });
};

    return(
    <div className="form-group" >
      <Button variant="primary" className="action-authentication-warning t-xxm" onClick={authenticated ? null : handleShow}>
      </Button>
      <div className="form-group-action-toggle">
          <label className= {"form-action-toggle " + (authenticated ? null : " ")}>
              <div className = "checkfield-div">
                <Checkfield 
                label={label}
                icon={icon}
                iconStyle="toggle-action-icons"
                style={{ marginRight: 20 }}
                className="form-check-input"
                type="checkbox"
                id={id}
                value={value}
                setSave={setSave}
                onChange={onChange}
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                handleAuthenticated={handleAuthenticated}
                />
                </div>
              <div className="action-description t-s"> 
                {description}
              </div>
              {authenticated ? 
              
              null

    :
                <div className="action-authentication-warning t-m">
        Click here to authenticate with Spotify and use this option

                </div>
                

              }
              
          </label>
          {value ? 
          
          <div className="form-action-toggle toggle-action-inputs" >
              <div className="form-group">
                <label htmlFor="exampleInputEmail1"></label>
                <input 
                type="email"
                name="contestDescription"
                value={inputValues.contestDescription}
                onChange={handleOnChange}
                className="form-control" 
                id="exampleInputEmail1" 
                placeholder="Enter Spotify Track URL" 
                />
              </div>
          
          </div>
          
          :
          
          null
          
          }
      </div>
    </div>
        )
}

export default ToggleActionButton