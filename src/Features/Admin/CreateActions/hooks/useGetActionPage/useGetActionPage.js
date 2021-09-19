import { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/react-hooks';
import { getArtistUser, listArtists } from '../../../../../graphql/queries';
import {
  createArtistUser,
  createActionPage,
  createArtist,
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
  console.log('artistRoute', artistRoute);
  console.log('actionPageInfo', actionPageInfo);
  // define queries
  const {
    data: userData,
    loading: userLoading,
    error: userError,
    refetch: refectchUserData,
  } = useQuery(gql(getArtistUser), {
    variables: { id: userId },
  });
  console.log('userData', userData);
  const {
    data: artistByRouteData,
    loading: artistByRouteLoading,
    error: artistByRouteError,
    refetch: refetchArtistByRoute,
  } = useQuery(gql(listArtists), {
    variables: { filter: { route: { eq: artistRoute } } },
  });

  // define mutations
  const [
    addUser,
    {
      loading: createUserLoading,
      // data: createUserData,
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
        query: gql(listArtists),
        variables: { filter: { id: { eq: artistId } } },
      },
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
      if (artistByRouteData.listArtists.items.length === 0) {
        return true;
      }

      setRouteIncrement(routeIncrement + 1);
      setArtistRoute(`${artistRoute}-${routeIncrement.toString()}`);
      refetchArtistByRoute();
    }
    return false;
  };

  const enduserInfo = userData?.getArtistUser;

  try {
    // if the enduser does not exist
    if (!enduserInfo && !createUserLoading && uniqueArtistRoute()) {
      // create an artist for the new user
      if (!createArtistLoading && !artistId && !createArtistData) {
        // route string is defined elsewhere
        const artistInput = { name: artistName, route: artistRoute };
        addArtist({
          variables: { input: artistInput },
        });
      }
      if (createArtistData && !artistId) {
        setArtistId(createArtistData.createArtist.id);
      }
      if (artistId) {
        // add new user since it doesn't exist
        addUser({
          variables: {
            input: {
              id: userId,
              artistID: artistId,
            },
          },
        });
        refectchUserData();
      }
    }
    if (enduserInfo && !actionPageId && !artistRoute) {
      setArtistRoute(enduserInfo.artist.route);
      // TODO this should pull from the artist, not from the enduserInfo
      setActionPageInfo(enduserInfo.actionPages.items[0]);
      if (enduserInfo.actionPages.items[0]) {
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
  };
};
