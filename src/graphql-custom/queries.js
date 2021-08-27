/* these are custom graphQL queries that get used in multiple places */

export const getActionPageByArtistAndPageRoute = `query getArtistActionPageByRoute($artistRoute: String, $pageRoute: String) {
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
            subscribers {
              items {
                id
                actionPageID
                enduserID
                referralEnduserID
                enduserPoints
                completedActionButtonIDs
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
  `


export const getActionPageAndEnduserDetailsByArtistPageRouteAndEnduserID = `query getArtistActionPageByRoute($artistRoute: String, $pageRoute: String, $enduserID: String) {
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
                referralEnduserID
                enduserPoints
                completedActionButtonIDs
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
  `