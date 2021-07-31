import React from 'react';
import { gql, useQuery } from '@apollo/react-hooks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { listArtists, getActionPage } from '../../../../graphql/queries';
import { ActionButtons } from '../ActionButtons';
import { ActionHeader } from '../ActionHeader';

export const ActionPage = () => {
  const {
    data: artistData,
    // loading: userLoading,
    // error: userError,
    // refetch: refectchUserData,
  } = useQuery(gql(listArtists), {});

  const {
    data: actionPageData,
    loading,
    error,
  } = useQuery(gql(getActionPage), {
    variables: { id: 'cue-no-ego' },
  });


  console.log('actionPageData', actionPageData);
  return (
    <Container>
      {!loading ? (
        <Container>
          <ActionHeader data={actionPageData} />ƒ
          <ActionButtons data={actionPageData} />
        </Container>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Container>
  );
};
