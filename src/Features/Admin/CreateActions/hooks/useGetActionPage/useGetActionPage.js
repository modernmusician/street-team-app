import { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/react-hooks';
import { getActionPageByArtistAndPageRoute } from '../../../../../graphql-custom/queries';
import { getArtistUser, listArtists } from '../../../../../graphql/queries';
import {
  createArtistUser,
  createActionPage,
  createArtist,
  updateArtistUser,
} from '../../../../../graphql/mutations';
import { useCurrentAuthUser } from '../useCurrentAuthUser';

export const useGetActionPage = () => {
  const [artistId, setArtistId] = useState();
  const [actionPageInfo, setActionPageInfo] = useState();
  const [actionPageId, setActionPageId] = useState();
  const [artistRoute, setArtistRoute] = useState();
  const [routeIncrement, setRouteIncrement] = useState(0);
  const [error, setError] = useState();

  const { userId, artistName } = useCurrentAuthUser();
  console.log('userId', userId);
  // console.log('artistRoute', artistRoute);
  // console.log('actionPageInfo', actionPageInfo);
  // define queries
  // console.log('userData', userData);

  // const {
  //   data: artistByRouteData,
  //   loading: artistByRouteLoading,
  //   error: artistByRouteError,
  //   refetch: refetchArtistByRoute,
  // } = useQuery(gql(listArtists), {
  //   variables: { filter: { route: { eq: artistRoute } } },
  // });

  const getArtistByEnduser = `query GetArtistUser($id: ID!, $pageRoute: String) {
    getArtistUser(id: $id) {
      id
      username
      firstName
      lastName
      email
      phoneNumber
      artistID
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        profilePicture
        tags {
          items {
            id
            tag
            artistID
            createdAt
            updatedAt
          }
          nextToken
        }
        route
        createdAt
        updatedAt
        owner
        actionPages(filter: {pageRoute: {eq: $pageRoute}}) {
          items {
            id
            artistID
            creatorUserID
            pictureID
            pageTitle
            heading
            subheading
            pageRoute
            createdAt
            updatedAt
            owner
            actionButtons {
              items {
                id
                actionPageID
                preActionText
                postActionText
                buttonIcon
                backgroundColor
                textColor
                pointValue
                position
                targetURL
                serviceAction
                createdAt
                updatedAt
                owner
              }
            }
          }
          nextToken
        }
      }
      owner
      actionPages {
        items {
          id
          artistID
          creatorUserID
          pictureID
          pageTitle
          heading
          subheading
          pageRoute
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            profilePicture
            route
            createdAt
            updatedAt
            owner
          }
          creatorUser {
            id
            username
            firstName
            lastName
            email
            phoneNumber
            artistID
            createdAt
            updatedAt
            owner
          }
          owner
          subscribers {
            nextToken
          }
          actionButtons {
            nextToken
          }
          picture {
            id
            publicUrl
            name
            owner
            visibility
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;

  const {
    data: userData,
    loading: userLoading,
    error: userError,
    refetch: refetchUserData,
  } = useQuery(gql(getArtistByEnduser), {
    variables: { id: userId, pageRoute: 'join' },
  });

  const {
    data: artistByRouteData,
    error: artistByRouteError,
    loading: artistByRouteLoading,
    refetch: refetchArtistByRoute,
  } = useQuery(gql(getActionPageByArtistAndPageRoute), {
    variables: { artistRoute, pageRoute: 'join' },
  });

  // define mutations
  const [
    addUser,
    {
      loading: createUserLoading,
      data: createUserData,
      error: createUserError,
    },
  ] = useMutation(gql(createArtistUser), {
    update(cache) {
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
      error: addArtistError,
    },
  ] = useMutation(gql(createArtist), {
    refetchQueries: [
      {
        query: gql(getActionPageByArtistAndPageRoute),
        variables: { artistRoute, pageRoute: 'join' },
      }
    ],
    awaitRefetchQueries: true,
  });

  const [
    addActionPage,
    {
      data: createActionPageData,
      loading: createActionPageLoading,
      error: addActionPageError,
    },
  ] = useMutation(gql(createActionPage), {
    refetchQueries: [{ query: gql(getArtistUser), variables: { id: userId } }],
    awaitRefetchQueries: true,
  });

  //TODO this shouldn't be called until after we find out that an enduser doesn't exist... but for some reason it's been called still
  const uniqueArtistRoute = () => {
    if (!artistRoute && artistName) {
      setArtistRoute(artistName.replace(/[^a-zA-Z0-9-_]/g, '-'));
      return false;
    }
    else if (!artistName && !artistRoute){
      // if there is no artistRoute set and no artistName passed in, then we're going to just use static default values
      setArtistRoute('fb');
    }
    console.log('artistByRouteData', artistByRouteData);
    if (artistByRouteData && !artistByRouteLoading && artistRoute) {
      // find if an artist exists at this route. if it does, try a different route
      if (artistByRouteData.ArtistByRoute.items.length === 0) {
        return true;
      }
      let artistArray = artistRoute.split('_');
      console.log(`artistArray`,artistArray);
      let artistName = artistArray[0];
      setRouteIncrement(parseInt(routeIncrement) + 1);
      setArtistRoute(`${artistName}_${routeIncrement.toString()}`);
      refetchArtistByRoute();
    }
    return false;
  };
  if(userLoading){
    return {loading: true}
  }
  const enduserInfo = userData?.getArtistUser;
  try {
    // if the enduser does not exist
    if (!enduserInfo && !userLoading && !createUserLoading && !createUserData) {
      // create an artist for the new user
      if (!createArtistLoading && !artistId && !createArtistData) {
        //split this if statement to avoid continuing to hit this request if we don't need it
        if(uniqueArtistRoute()){
          // route string is defined elsewhere
          const artistInput = { name: artistName || "artist" , route: artistRoute };
          addArtist({
            variables: { input: artistInput },
          });
        }
      }
      if (createArtistData && !artistId) {
        setArtistId(createArtistData.createArtist.id);
      }
      if (artistId && userId && !createUserData && !createUserLoading && !userLoading && userData && !userData?.getArtistUser) {
        console.log(`1 ----- create a new artist user`)
        console.log(`userData`,userData)
        // add new user since it doesn't exist
        addUser({
          variables: {
            input: {
              id: userId,
              artistID: artistId,
            },
          },
        });
        refetchUserData();
      }
    }
    console.log('enduserInfo', enduserInfo);
    console.log('actionPageId', actionPageId);
    console.log('artistRoute', artistRoute);
    //if the enduser doesn't have an artist, add one & then set the artist Id
    if (enduserInfo && !enduserInfo.artist && !createArtistData && !createArtistLoading){
      console.log(`2 -----`)
      console.log(`no artist for enduser... create one! `)
      const artistInput = { name: artistName, route: artistRoute };
      // addArtist({
      //   variables: { input: artistInput },
      // });
    }
    if (createArtistData && !artistId) {
      console.log(`3 -----`)
      const id =createArtistData.createArtist.id
      setArtistId(id);
      enduserInfo.artistID = id;
      updateArtistUser(enduserInfo)
    }
    if (enduserInfo && !actionPageId && !artistId) {
      console.log(`4 -----`)
      setArtistRoute(enduserInfo.artist.route);
      if (!artistId) {
        setArtistId(enduserInfo.artistID, 'artistId');
      }
      const existingActionPageInfo = enduserInfo.artist.actionPages.items.find(item => item.pageRoute ==="join");
      if (existingActionPageInfo && !actionPageInfo) {
        setActionPageInfo(existingActionPageInfo);
        console.log('existing action page id', existingActionPageInfo.id);
        setActionPageId(existingActionPageInfo.id);
      }
    }
    if (createActionPageData && !actionPageId) {
      console.log(`5 ---`,artistId,userId,enduserInfo,actionPageId)
      setActionPageId(createActionPageData.createActionPage.id);
    }

    if (
      !createActionPageData &&
      !actionPageId &&
      !actionPageInfo &&
      enduserInfo &&
      !createUserLoading &&
      !createActionPageLoading &&
      artistId &&
      userId
    ) {
      const newPageInput = {
        creatorUserID: userId,
        artistID: artistId,
        pageTitle: 'Almost there!',
        heading: 'Welcome to the community!',
        subheading: 'Please take 2 mins to complete the following steps',
        pageRoute: 'join',
      };
      addActionPage({ variables: { input: newPageInput } });
    }
  } catch (err) {
    console.error(
      err,
      userError,
      artistByRouteError,
      createUserError,
      addArtistError,
      addActionPageError
    );
    setError(err);
  }

  const responseActionPageData = userData?.getArtistUser?.artist?.actionPages?.items?.find(item => item.pageRoute==="join");
  console.log(`respond --- responseActionPageData`,responseActionPageData)

  return {
    loading:
      userLoading ||
      artistByRouteLoading ||
      createUserLoading ||
      createArtistLoading ||
      createActionPageLoading,
    error,
    actionPageId,
    artistRoute,
    actionPageData: responseActionPageData,
  };
};
