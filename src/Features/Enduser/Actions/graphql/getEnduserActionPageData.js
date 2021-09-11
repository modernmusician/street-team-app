/* custom queries for actions views */

export const getActionPageAndEnduserDetailsByArtistPageRouteAndEnduserID = `query getArtistActionPageByRoute($artistRoute: String, $pageRoute: String, $enduserID: ID!) {
    ArtistByRoute(route: $artistRoute) {
      items {
        id
        route
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
              nextToken
            }
            subscribers(filter: {enduserID: {eq: $enduserID}}) {
                items {
                    id
                    actionPageID
                    enduserID
                    enduserPageSubscriptionCompletedActions {
                        items {
                          id
                          isExpired
                          actionID
                          owner
                        }
                      }
                    referralEnduserID
                    createdAt
                    updatedAt
                    owner
                    }
              nextToken
            }
          }
          nextToken
        }
      }
    }
  }
  `;
