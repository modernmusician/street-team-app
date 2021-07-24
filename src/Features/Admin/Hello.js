import React from 'react';
import SecureAdminView from '../../Components/SecureAdimView';
import { gql, useQuery, useMutation } from '@apollo/react-hooks';
import { getArtistUser, listArtists } from '../../graphql/queries';

export function Hello() {
  //define queries
  //list all artists
  const {
    data: artistData,
    loading: userLoading,
    error: userError,
    refetch: refectchUserData,
  } = useQuery(gql(listArtists), {});

  console.log(artistData);
  return (
    <SecureAdminView>
      <div>hi admin</div>;
    </SecureAdminView>
  );
}
