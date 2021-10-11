import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { Container } from 'react-bootstrap';
import { NavBar } from '../../CreateActions/NavBar';
import { RootContainer } from '../../CreateActions/views/CreateActionPage';
import { useCurrentAuthUser } from '../../CreateActions/hooks/useCurrentAuthUser';
import { getAllSubscribersFromArtistUser } from '../queries';

const TableContainer = styled.div`
  background-color: #dddddd;
`;

const endUser = input => {
  const summary = {};

  summary.email = input?.enduser?.email;
  summary.firstName = input?.enduser?.firstName;
  summary.lastName = input?.enduser?.lastName;
  summary.phone = input?.enduser?.phoneNumber;
  summary.id = input?.enduserID;
  summary.totalPoints =
    input?.enduserPageSubscriptionCompletedActions?.items.reduce(
      (a, b) => a + b,
      0
    );

  return summary;
};

export const AudienceView = () => {
  const { userId } = useCurrentAuthUser();
  const { data, error, loading } = useQuery(getAllSubscribersFromArtistUser, {
    variables: {
      id: userId,
    },
  });

  if (loading || error || !data) return null;

  const endUserData =
    data.getArtistUser.artist.actionPages.items[0].subscribers.items.map(item =>
      endUser(item)
    );

  return (
    <React.Fragment>
      <NavBar headerText="Your Audience" />
      <RootContainer fluid>
        <Container fluid>
          <TableContainer>
            This is where we will put our dynamic audience data
            {endUserData &&
              endUserData.map(user => (
                <div>
                  <h1>{user.email}</h1>
                  <h1>{user.totalPoints}</h1>
                  <h2>{user.firstName || '[no name]'}</h2>
                  <h2>{user.phoneNumber}</h2>
                </div>
              ))}
          </TableContainer>
        </Container>
      </RootContainer>
    </React.Fragment>
  );
};
