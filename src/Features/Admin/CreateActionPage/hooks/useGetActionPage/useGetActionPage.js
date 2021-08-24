import { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/react-hooks';
import { getArtistUser, listArtists } from '../../../../../graphql/queries';
import {
  createArtistUser,
  createActionPage,
  createArtist,
} from '../../../../../graphql/mutations';

import { Auth } from 'aws-amplify';

export const useGetActionPage = () => {
  const [userId, setUserId] = useState(null);
  const [artistId, setArtistId] = useState(null);
  const [actionPageInfo, setActionPageInfo] = useState(null);
  const [actionPageId, setActionPageId] = useState(null);
  const [artistName, setArtistName] = useState(null);
  const [artistRoute, setArtistRoute] = useState(null);
  const [routeIncrement, setRouteIncrement] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // AUTH details -- get the logged in user's ID
  if (userId === null) {
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(user => {
        setUserId(user.username);
        console.log(`Load additional settings for user: ${user.username}`);
        console.log(user.attributes.email);
        setArtistName(user.attributes.name);
        console.log(artistName);
      })
      .catch(err => setError(err));
  }

  // define queries
  const {
    data: userData,
    loading: userLoading,
    // error: userError,
    refetch: refectchUserData,
  } = useQuery(gql(getArtistUser), {
    variables: { id: userId },
  });

  const {
    data: artistByRouteData,
    loading: artistByRouteLoading,
    // error: artistByRouteError,
    refetch: refetchArtistByRoute,
  } = useQuery(gql(listArtists), {
    variables: { filter: { route: { eq: artistRoute } } },
  });

  // get the artist by name. use this to find out if an artist name already exists in the DB
  // artist names need to be unique because we're using them for routing enduser pages
  // const {
  //   data: artistByNameData,
  //   loading: artistByNameLoading,
  //   error: artistByNameError,
  //   refetch: refetchArtistByNameData,
  // } = useQuery(gql(listArtists), {
  //   variables: { filter: { name: { eq: artistName } } },
  // });

  // define mutations
  const [
    addUser,
    {
      loading: createUserLoading,
      // data: createUserData,
      // error: createUserError,
    },
  ] = useMutation(gql(createArtistUser), {
    update(cache) {
      // const {userData} = cache.readQuery({query:gql(getEnduser), input: {id: userId }});
      cache.writeQuery({
        query: gql(getArtistUser),
        data: { artistuser: addUser },
      });
    },
    refetchQueries: [
      {
        query: gql(getArtistUser),
        variables: { id: userId },
      },
    ],
    awaitRefetchQueries: true,
  });
  const [
    addArtist,
    {
      loading: createArtistLoading,
      data: createArtistData,
      // error: createArtistError,
    },
  ] = useMutation(gql(createArtist), {
    // update(cache, { data: { addSubscription } }) {
    // const {userData} = cache.readQuery({query:gql(getEnduser), input: {id: userId }});
    // cache.writeQuery({query:gql(getEnduser),data:{enduser: addEnduser}});
    // },
    refetchQueries: [
      {
        query: gql(getArtistUser),
        variables: { id: userId },
      },
      {
        query: gql(listArtists),
        variables: { filter: { id: { eq: artistId } } },
      },
    ],
    awaitRefetchQueries: true,
  });

  const [
    ,
    // addActionPage,
    { data: createActionPageData, loading: createActionPageLoading },
  ] = useMutation(gql(createActionPage), {
    // update(cache, { data: { addSubscription } }) {
    // const {userData} = cache.readQuery({query:gql(getEnduser), input: {id: userId }});
    // cache.writeQuery({query:gql(getEnduser),data:{enduser: addEnduser}});
    // },
    refetchQueries: [
      {
        query: gql(getArtistUser),
        variables: { id: userId },
      },
    ],
    awaitRefetchQueries: true,
  });

  const uniqueArtistRoute = () => {
    console.log(artistRoute, 'is this route unique?');
    if (artistRoute == null) {
      setArtistRoute(artistName.replace(/[^a-zA-Z0-9-_]/g, '-'));
      return false;
    }
    if (
      artistByRouteData != null &&
      !artistByRouteLoading &&
      artistRoute != null
    ) {
      // find if an artist exists at this route. if it does, try a different route
      if (artistByRouteData.listArtists.items.length === 0) {
        console.log(artistRoute, 'ROUTE is unique! yay');
        return true;
      }

      setRouteIncrement(routeIncrement + 1);
      setArtistRoute(`${artistRoute}-${routeIncrement.toString()}`);
      refetchArtistByRoute();
    }
    return false;
  };

  console.log(userData, 'userData');
  const enduserInfo = userData?.getArtistUser;

  const getActions = () => {
    try {
      // if the enduser does not exist
      if (enduserInfo == null && !createUserLoading && uniqueArtistRoute()) {
        console.log('enduserInfo does not exist -- creating user');
        // create an artist for the new user
        if (!createArtistLoading && artistId == null && !createArtistData) {
          console.log('creating a new artist for the new enduser');
          // route string is defined elsewhere
          const artistInput = { name: artistName, route: artistRoute };
          const newArtistData = addArtist({
            variables: { input: artistInput },
          });
          console.log(newArtistData, 'new artist data');
          console.log('artist record created');
        }
        if (createArtistData && artistId == null) {
          console.log('setting artist id to the newly created artist');
          setArtistId(createArtistData.createArtist.id);
        }
        if (artistId != null) {
          console.log('artistId to create user is', artistId);
          // add new user since it doesn't exist
          const newuserData = addUser({
            variables: {
              input: {
                id: userId,
                artistID: artistId,
              },
            },
          });
          console.log(newuserData);
          console.log('enduser record created');
          refectchUserData();
        }
      }
      // this looks for user related contests
      // TODO... should eventually look at the artist first to see if there are any action pages for that artist
      // TODO .... this should use the .find array function to find the related
      // actionPage ID if there is one passed in somehow. for now it's one-to-one
      // TODO eventually this page will be passed an actionPageId from an "action page selection" screen in
      // which an artist user selects which action page they want to edit -- right now pages are one-to-one with artist
      if (enduserInfo != null && actionPageId == null && artistRoute == null) {
        setArtistRoute(enduserInfo.artist.route);
        // TODO this should pull from the artist, not from the enduserInfo
        setActionPageInfo(enduserInfo.actionPages.items[0]);
        if (actionPageInfo != null) {
          console.log(actionPageInfo.id);
          setActionPageId(actionPageInfo.id, 'actionPageId');
        }
        if (artistId == null) {
          setArtistId(enduserInfo.artistID, 'artistId');
        }
        console.log('spot 2');
      }
      // //TODO this shouldn't happen, so we're not going to code for it today
      // if(enduserInfo!=null && !createUserLoading && !artistLoading && artistData.listArtists.items.length==0)
      // {
      //   console.log("SPOT 4!!")
      //   // get the artist related to the enduser
      //   console.log(artistData,'artistData');
      //   console.log(artistName,'artistName');
      //   console.log(userId,'userId');
      //   // no artist exists, so we'll create one...
      // TODO this shouldn't happen because we should be creating the artist prior to creating the enduser
      //   const newArtistData = addArtist({variables:{input :{
      //     name:artistName,
      //   } }});
      //   console.log(newArtistData,"new artist data");
      //   console.log("artist record created");
      //   setArtistId(newArtistData.createArtist.id)
      //   //then if no action page exists for an artist, create an action page
      // }

      if (
        createActionPageData == null &&
        actionPageId == null &&
        actionPageInfo == null &&
        enduserInfo != null &&
        !createUserLoading &&
        !createActionPageLoading &&
        artistId != null &&
        userId != null
      ) {
        // if action page info is null, that means this user doesn't have an action page so we'll create one
        // see above TODOs about searching related artist's action pages
        // these default values should probably be stored in the database somewhere
        // const newPageInput = {
        //   creatorUserID: userId,
        //   artistID: artistId,
        //   pageTitle: 'Almost there!',
        //   heading: 'Welcome to the community!',
        //   subheading: 'Please take 2 mins to complete the following steps',
        //   pageRoute: 'join',
        // };
        console.log('spot 3');
        console.log('actionPageId', actionPageId);
        console.log('artistId', artistId);
        console.log('createActionPageData', createActionPageData);
      }

      if (createActionPageData != null && actionPageId == null) {
        console.log('setting action page to be the newly created action page');
        setActionPageId(createActionPageData.createActionPage.id);
      }
    } catch (err) {
      setError(err);
    }
  };
  console.log('getActions', getActions());

  useEffect(() => {
    if (createUserLoading || createActionPageLoading) {
      setIsLoading(true);
    } else if (actionPageId == null || artistRoute == null) {
      setIsLoading(true);
    } else if (userLoading || createUserLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [createUserLoading, createActionPageLoading, actionPageId]);

  console.log('actionPageId', actionPageId);
  console.log('artistRoute', artistRoute);

  return {
    loading: isLoading,
    error,
    actionPageId,
    artistRoute,
  };
};
