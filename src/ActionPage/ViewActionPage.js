import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';
import { Link } from '@reach/router';

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import PageNotFound from '../Components/NotFoundPage';
import SessionVariables from '../functional-tests/SessionVariables';
import ActionButton from '../Components/ActionButton';
import ViewActionPageCard from "./ViewActionPageCard";


import { gql, useQuery } from '@apollo/react-hooks';
import { getActionPage, getEnduser } from '../graphql/queries';
import Amplify from 'aws-amplify';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import awsMobile from '../aws-exports';
import { useLocation } from "@reach/router"
Amplify.configure(awsMobile);
// import { createTask } from './graphql/mutations';
// import { listTasks } from './graphql/queries';


function ViewActionPage({pageId})  {
  
  // pageId = 'cue-no-ego'; //this is hardcoded as the test page
  
  console.log(pageId);
  
  // A custom hook that builds on useLocation to parse
  // the query string for you.
  const useQuery = (queryParam) => {
    const search = new URLSearchParams(useLocation().search);
    return search.get(queryParam);
  };
  
  // const foundReferrer = useQuery("referrer");
  // const referrerId = foundReferrer ? foundReferrer : "none";
  const referrerId = useQuery("referrer");
  console.log("referrer is: " + referrerId)
  SessionVariables.setReferrerId(referrerId);
  // stash the referral ID in the session
  
  const [data, setData] = useState({ getActionPage: {} });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState(null);
  // const [completedActions, setCompletedActions] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await API.graphql({
          query: getActionPage,
          variables: { id: pageId },
          authMode: 'AWS_IAM',
        });
        console.log(result.data);
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log(`Error executing query: ${error}`);
        setError(`Unfortunately, something went wrong: ${error}`);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return (
      <div>
        <p>Data Error: ${error.message} </p>
        {/* <p>User Data Error: ${enduserError.message} </p> */}
      </div>
    );
  }

  console.log("data:");
  console.log(data);
  
  const pageData = data.getActionPage;
  // console.log(enduserData);
  // const enduserInfo = enduserData.getEnduser;
  if (!pageData){
    return(<PageNotFound message={"pageId: ".concat(pageId)}/>)
  }
  
  const picture = pageData.picture;
  var picUrl = ""; //default background pic is empty
  if(picture) //if the picture exists, use the publicUrl from that pic
  {    
    picUrl=picture.publicUrl;
  }
  console.log("background picture:");
  console.log(picUrl);
  
  return (
    <div>
      <div>
        <Background backgroundPictureUrl={picUrl} myClass="background-wrapper" />
      </div>
      <div>
        <CenterBox
          boxContent={
            <ViewActionPageCard
              pageData={pageData}
              // enduserFullName={enduserFullName || "New"}
              // totalPoints={enduserpageData.enduserPoints || 0}
              // enduseractionPageID={enduserpageData.id}
              // referralEnduserId={referralId}
            />
          }
          displayFooter={true}
        />
      </div>
    </div>
    
  );
}

export default ViewActionPage;
