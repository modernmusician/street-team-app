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
        query: gql(getArtistUser),
        variables: { id: userId },
      },
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

  const uniqueArtistRoute = () => {
    if (!artistRoute && artistName) {
      setArtistRoute(artistName.replace(/[^a-zA-Z0-9-_]/g, '-'));
      return false;
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

  const enduserInfo = userData?.getArtistUser;

  try {
    // if the enduser does not exist
    if (!enduserInfo && !createUserLoading && !createUserData) {
      // create an artist for the new user
      if (!createArtistLoading && !artistId && !createArtistData && uniqueArtistRoute()) {
        // route string is defined elsewhere
        const artistInput = { name: artistName, route: artistRoute };
        addArtist({
          variables: { input: artistInput },
        });
      }
      if (createArtistData && !artistId) {
        setArtistId(createArtistData.createArtist.id);
      }
      if (artistId && userId && !createUserData && !userData) {
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
      console.log(`no artist for enduser... create one! `)
      const artistInput = { name: artistName, route: artistRoute };
      // addArtist({
      //   variables: { input: artistInput },
      // });
    }
    if (createArtistData && !artistId) {
      const id =createArtistData.createArtist.id
      setArtistId(id);
      enduserInfo.artistID = id;
      updateArtistUser(enduserInfo)
    }
    if (enduserInfo && !actionPageId && !artistRoute) {
      setArtistRoute(enduserInfo.artist.route);
      // TODO this should pull from the artist, not from the enduserInfo
      setActionPageInfo(enduserInfo.actionPages.items[0]);
      if (enduserInfo.actionPages.items[0]) {
        console.log('actionPageInfo.id', actionPageInfo.id);
        setActionPageId(actionPageInfo.id, 'actionPageId');
      }
      if (!artistId) {
        setArtistId(enduserInfo.artistID, 'artistId');
      }
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

    if (createActionPageData && !actionPageId) {
      setActionPageId(createActionPageData.createActionPage.id);
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
    actionPageData: userData?.getArtistUser?.artist?.actionPages?.items?.find(item => item.pageRoute==="join"),
  };
};
