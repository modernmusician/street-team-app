import React, { Fragment, useState, useEffect } from 'react';
// import styled from 'styled-components';

// import Button from 'react-bootstrap/Button';
// import { Link } from '@reach/router';

import Background from '../../Components/Background';
// import CenterBox from '.../Components/CenterBox';
// import PageNotFound from '../Components/NotFoundPage';
// import SessionVariables from '../functional-tests/SessionVariables';
// import ActionButton from '../Components/ActionButton';
import CreateActionPageCard from "./CreateActionPageCard";
import TopNavbar from "./TopNavbar";


// import { gql, useQuery } from '@apollo/react-hooks';
// import { getActionPage, getEnduser } from '../graphql/queries';
// import Amplify from 'aws-amplify';
// import { Auth, API, graphqlOperation } from 'aws-amplify';
// import awsMobile from '../aws-exports';
// import { useLocation } from "@reach/router"
// Amplify.configure(awsMobile);
// import { createTask } from './graphql/mutations';
// import { listTasks } from './graphql/queries';

import { gql, useQuery, useMutation } from '@apollo/react-hooks';
import { getArtistUser} from '../../graphql/queries';
import { createArtistUser,createActionPage } from '../../graphql/mutations';

import { Auth } from 'aws-amplify';


function CreateActionPage()  {
  const [userId, setUserId] = useState(null);
  const [artistId, setArtistId] = useState(null);
  const [actionPageId, setActionPageId] = useState(null);
  const [artistName, setArtistName] = useState(null);
  const [error, setError] = useState(null);
  
  // AUTH details -- get the logged in user's ID
  Auth.currentAuthenticatedUser({
    bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
    .then(user => {
      setUserId(user.username);
      console.log(`Load additional settings for user: ${user.username}`);
      console.log(user.attributes.email);
      // TBD
      setArtistName(user.attributes.name);
      console.log(artistName);
    })
    .catch(err => setError(err));
    
  //define queries
  const {
    data: userData,
    loading: userLoading,
    error: userError,
    refetch: refectchUserData
  } = useQuery(gql(getArtistUser), {
    variables: { id: userId },
  });

  // define mutations
 const [addUser, { loading: createUserLoading, data:createUserData, error:createUserError }] = useMutation(gql(createArtistUser),
  {
      update(cache, { data: { addEnduser } }) {
        // const {userData} = cache.readQuery({query:gql(getEnduser), input: {id: userId }});
        cache.writeQuery({query:gql(getArtistUser),data:{artistuser: addUser}});
      },
    refetchQueries: [{query:gql(getArtistUser),
    variables: {id: userId },
    }],
    awaitRefetchQueries:true
    
  }
  );
  const [addActionPage, {loading:createActionPageLoading}] = useMutation(gql(createActionPage),
  {
      // update(cache, { data: { addSubscription } }) {
        // const {userData} = cache.readQuery({query:gql(getEnduser), input: {id: userId }});
        // cache.writeQuery({query:gql(getEnduser),data:{enduser: addEnduser}});
      // },
    refetchQueries: [{query:gql(getArtistUser),
    variables: {id: userId },
    }],
    awaitRefetchQueries:true
  }
  );

  if (userLoading || createUserLoading) {
    return <div><p>Loading...</p></div>;
  }
  if (userError) {
    return (
      <div>
        <p>User Data Error: ${userError.message} </p>
      </div>
    );
  }
  
  console.log(userData);
  const enduserInfo = userData.getArtistUser;

  var actionPageInfo = null;
  var actionID = null;
  
  try
    {
      //if the enduser does not exist
      if(enduserInfo==null && !createUserLoading){
        console.log(enduserInfo)
        console.log("enduserInfo does not exist -- creating user");
        // const newuserData = handleCreatNewEnduser();
        const newuserData = addUser({variables:{input :{
          id:userId,
        } }});
        console.log(newuserData);
        console.log("enduser record created");
        refectchUserData();
      }
      //this looks for user related contests
      // TODO... should eventually look at the artist first to see if there are any action pages for that artist
      // TODO .... this should use the .find array function to find the related actionPage ID if there is one passed in somehow. for now it's one-to-one
      //TODO eventually this page will be passed an actionPageId from an "action page selection" screen in which an artist user selects which action page they want to edit -- right now pages are one-to-one with artist
      if(enduserInfo!=null && actionPageId==null){
        actionPageInfo = enduserInfo.actionPages.items[0];
        if(actionPageInfo!=null){
          console.log(actionPageInfo.id);
          setActionPageId(actionPageInfo.id);
          setArtistId(enduserInfo.artistID);
        }
        console.log("spot 2")
      }
      if(actionPageInfo==null && enduserInfo!=null && !createUserLoading && !actionPageId)
      {
        //if action page info is null, that means this user doesn't have an action page so we'll create one
        // see above TODOs about searching related artist's action pages
        // these default values should probably be stored in the database somewhere
        var newPageInput = {
          id: actionPageId,
          creatorUserID: userId,
          pageTitle:"Almost there!",
          heading:"Welcome to the community!",
          subheading:"Please take 2 mins to complete the following steps and unlock your FREE Starter Pack",
        }
        if(artistId!=null){
          newPageInput["actionID"]=artistId;
        }
        const newActionPageData = addActionPage({variables:{input:newPageInput}});
        console.log("spot 3")
      }
    }
  catch(err) 
  {
    console.log(err.message);
    return(
    <div>
        <p>User-Contest Error: ${err.message} </p>
    </div>
    );
  }
  
  if (createUserLoading || createActionPageLoading) {
    return <div><p>Creating new page...</p></div>;
  }
  
  if(actionPageId==null)
  {
    return <div> <p>waiting... </p></div>
  }
  else{
    console.log('actionPageId', actionPageId);
    console.log('artistId', artistId);
  
  
  //default artistId
  // if(artistId == null)
  // {
  //   setArtistId("cuenoego")
  // }
  // if(actionPageId==null)
  // {//default action page ID
  //   setActionPageId("onboarding")
  // }

    return (
    
      <div>
        <Background />
        <TopNavbar />
        <CreateActionPageCard actionPageId = {actionPageId}/>
      </div>
      
    );
  }
}

export default CreateActionPage;
