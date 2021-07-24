import React from 'react';
import { gql, useQuery } from '@apollo/react-hooks';
import { listArtists } from '../../graphql/queries';

export function Hello() {
  //define queries
  //list all artists
  const {
    data: artistData,
    // loading: userLoading,
    // error: userError,
    // refetch: refectchUserData,
  } = useQuery(gql(listArtists), {});

  console.log(artistData);
  return <div style={{ color: 'white' }}>hi enduser</div>;
}
