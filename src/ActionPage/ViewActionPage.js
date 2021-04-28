import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';
import { Link } from '@reach/router';

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import PageNotFound from '../Components/NotFoundPage';
import SessionVariables from '../functional-tests/SessionVariables';
import ActionButton from '../Components/ActionButton';


import { gql, useQuery } from '@apollo/react-hooks';
import { getActionPage, getEnduser, listContests } from '../graphql/queries';
import { createContest } from '../graphql/mutations';
import Amplify from 'aws-amplify';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import awsMobile from '../aws-exports';
import { useLocation } from "@reach/router"
Amplify.configure(awsMobile);
// import { createTask } from './graphql/mutations';
// import { listTasks } from './graphql/queries';


function ViewActionPage({pageId})  {
  
  // this needs to use the contest id, which right now hard coded, going to be from the incoming path eventually will be from a subdomain or something
  // const contestId = 'little-contest';
  pageId = 'd6f1b146-9b82-4f24-9d8a-215884c84b39'; //this is hardcoded as the test page
  
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
  
  const [data, setData] = useState({ getContest: {} });
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
    // if (contestLoading || enduserLoading) {
    return <p>Loading...</p>;
  }
  // if (contestError || enduserError) {
  if (error) {
    return (
      <div>
        <p>Contest Data Error: ${error.message} </p>
        {/* <p>User Data Error: ${enduserError.message} </p> */}
      </div>
    );
  }

  console.log(data);
  const pageData = data.getActionPage;
  // console.log(enduserData);
  // const enduserInfo = enduserData.getEnduser;
  if (!pageData){
    return(<PageNotFound message={"pageId: ".concat(pageId)}/>)
  }
  
  return (
    <div>
        <div className="some-class">
            <h1> {pageData.heading} </h1>
            <h5> <i>{pageData.subheading}</i> </h5>
        </div>
      {pageData.actionButtons.items.length > 0 ? 
        pageData.actionButtons.items.map((itemMapped, index) =>
            (<div key={index}>
                <ActionButton actionButtonConfig={itemMapped} />
            </div>))
      :
      <div>
        <p>sorry... but there's no actions to take here</p>
        <img alt="pika is sad we couldn't find any actions" 
        src='https://www.memecreator.org/static/images/templates/804179.jpg'
        height={100}
        />
      </div>
      }
     {/*
     <AmplifySignOut
     */}
    </div>
  );
}

export default ViewActionPage;
