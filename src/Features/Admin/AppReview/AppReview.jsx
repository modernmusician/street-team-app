/* eslint-disable max-len */
import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

/*global FB*/

const HeaderStyled = styled.div`
padding: 10px;
`;

export const AppReview = () => {

    const graphApiVersion = "v12.0"
    const clientId = "1889301381171290";
    const clientSecret = "1c038c3338e59e12763e9564f90f1735";
    
    const [facebookUserId, setFacebookUserId] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [longAccessToken, setLongAccessToken] = useState("");
    const [pageAccessToken, setPageAccessToken] = useState("");
    const [pageId, setPageId] = useState("");

    const componentClicked = data => {
    //   console.log("data", data);
    };
  

    const getLongLiveToken = () => {
                axios.get(`https://graph.facebook.com/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=fb_exchange_token&fb_exchange_token=${accessToken}`)
                .then((response) => {
                    setLongAccessToken(response.data.access_token);
                    console.log("Long Live Access Token");
                    console.log(response.data.access_token);
                });
      getPageAccessToken(longAccessToken);
        }

    const getPageAccessToken = () => {
            axios.get(`https://graph.facebook.com/${graphApiVersion}${facebookUserId}/accounts?access_token=${longAccessToken}`)
            .then((response) => {
                setPageAccessToken(response.data.access_token);
                setPageId(response.data.id);
             });
    }

    const responseFacebook = response => {
    console.log("all data:");
    console.log(response);
    console.log("facebookUserId:");
    console.log(response.userID);
    console.log("first access token:");
    console.log(response.accessToken);
      setAccessToken(response.accessToken);
      setFacebookUserId(response.id);
      getLongLiveToken();
    };
  
    return (
      <HeaderStyled>
          <h1>
        Login To Street Team
        </h1>
        <HeaderStyled>
            User Short-Lived Access Token:
        </HeaderStyled>
        <HeaderStyled>
            {accessToken}
        </HeaderStyled>
        <HeaderStyled>
            User Long-Lived Access Token:
        </HeaderStyled>
        <HeaderStyled>
            {longAccessToken}
        </HeaderStyled>
        <HeaderStyled>
            User Page Access Token:
        </HeaderStyled>
        <HeaderStyled>
            {pageAccessToken}
        </HeaderStyled>
        <br />
        <FacebookLogin
          appId="1889301381171290"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,pages_show_list,pages_messaging"
          onClick={componentClicked}
          callback={responseFacebook}
        />
      </HeaderStyled>
    );
  }