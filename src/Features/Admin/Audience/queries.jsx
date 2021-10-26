import gql from 'graphql-tag';

export const getAllSubscribersFromArtistUser = gql`
  query getSubscriptionsFromArtistUser($id: ID!) {
    getArtistUser(id: $id) {
      artist {
        actionPages {
          items {
            subscribers {
              items {
                enduser {
                  email
                  firstName
                  lastName
                  phone
                  profileName
                }
                createdAt
                enduserPageSubscriptionCompletedActions {
                  items {
                    action {
                      pointValue
                      serviceAction
                      createdAt
                      buttonIcon
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
