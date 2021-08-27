/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      name
      genre
      route
      createdAt
      updatedAt
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
      contests {
        items {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
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
          owner
          actions {
            nextToken
          }
          subscribers {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        genre
        route
        createdAt
        updatedAt
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
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
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
`;
export const artistByRoute = /* GraphQL */ `
  query ArtistByRoute(
    $route: String
    $sortDirection: ModelSortDirection
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ArtistByRoute(
      route: $route
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        genre
        route
        createdAt
        updatedAt
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
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
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
`;
export const getEnduser = /* GraphQL */ `
  query GetEnduser($id: ID!) {
    getEnduser(id: $id) {
      id
      username
      firstName
      lastName
      email
      phone
      profileName
      profilePicture
      profileDescription
      profileSocialLink
      createdAt
      updatedAt
      owner
      actionPageSubscriptions {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          enduserPoints
          completedActionButtonIDs
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
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
          }
          owner
        }
        nextToken
      }
      referredSubscribers {
        items {
          id
          actionPageID
          enduserID
          referralEnduserID
          enduserPoints
          completedActionButtonIDs
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
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
          }
          owner
        }
        nextToken
      }
      completedActions {
        items {
          id
          enduserID
          actionID
          actionPageID
          artistID
          isExpired
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
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
          }
          action {
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
          owner
        }
        nextToken
      }
    }
  }
`;
export const listEndusers = /* GraphQL */ `
  query ListEndusers(
    $filter: ModelEnduserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEndusers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
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
        referredSubscribers {
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
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
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
`;
export const getArtistUser = /* GraphQL */ `
  query GetArtistUser($id: ID!) {
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
        route
        createdAt
        updatedAt
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
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
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
export const listArtistUsers = /* GraphQL */ `
  query ListArtistUsers(
    $filter: ModelArtistUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtistUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
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
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getActionPage = /* GraphQL */ `
  query GetActionPage($id: ID!) {
    getActionPage(id: $id) {
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
        route
        createdAt
        updatedAt
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
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
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
            owner
          }
          nextToken
        }
      }
      owner
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
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
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
          }
          owner
        }
        nextToken
      }
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
          actionpage {
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
          }
          owner
          enduserCompletedActions {
            nextToken
          }
        }
        nextToken
      }
      picture {
        id
        publicUrl
        name
        owner
        visibility
        createdAt
        file {
          bucket
          region
          key
        }
        updatedAt
      }
    }
  }
`;
export const listActionPages = /* GraphQL */ `
  query ListActionPages(
    $filter: ModelActionPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
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
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
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
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const actionPagesByArtist = /* GraphQL */ `
  query ActionPagesByArtist(
    $artistID: ID
    $heading: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelActionPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ActionPagesByArtist(
      artistID: $artistID
      heading: $heading
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
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
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
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
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const actionPagesByRoute = /* GraphQL */ `
  query ActionPagesByRoute(
    $pageRoute: String
    $sortDirection: ModelSortDirection
    $filter: ModelActionPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ActionPagesByRoute(
      pageRoute: $pageRoute
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
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
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
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
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getActionPageSubscriptions = /* GraphQL */ `
  query GetActionPageSubscriptions($id: ID!) {
    getActionPageSubscriptions(id: $id) {
      id
      actionPageID
      enduserID
      referralEnduserID
      enduserPoints
      completedActionButtonIDs
      createdAt
      updatedAt
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
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
        referredSubscribers {
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
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      referralEnduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
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
        referredSubscribers {
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
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionPage {
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
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
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
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
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
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      owner
    }
  }
`;
export const listActionPageSubscriptionss = /* GraphQL */ `
  query ListActionPageSubscriptionss(
    $filter: ModelActionPageSubscriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionPageSubscriptionss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        actionPageID
        enduserID
        referralEnduserID
        enduserPoints
        completedActionButtonIDs
        createdAt
        updatedAt
        enduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        referralEnduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        actionPage {
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
        owner
      }
      nextToken
    }
  }
`;
export const actionPageSubscriptionsByActionPage = /* GraphQL */ `
  query ActionPageSubscriptionsByActionPage(
    $actionPageID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelActionPageSubscriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ActionPageSubscriptionsByActionPage(
      actionPageID: $actionPageID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        actionPageID
        enduserID
        referralEnduserID
        enduserPoints
        completedActionButtonIDs
        createdAt
        updatedAt
        enduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        referralEnduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        actionPage {
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
        owner
      }
      nextToken
    }
  }
`;
export const actionPageSubscriptionsByEnduser = /* GraphQL */ `
  query ActionPageSubscriptionsByEnduser(
    $enduserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelActionPageSubscriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ActionPageSubscriptionsByEnduser(
      enduserID: $enduserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        actionPageID
        enduserID
        referralEnduserID
        enduserPoints
        completedActionButtonIDs
        createdAt
        updatedAt
        enduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        referralEnduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        actionPage {
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
        owner
      }
      nextToken
    }
  }
`;
export const actionPageSubscriptionsByReferralEnduser = /* GraphQL */ `
  query ActionPageSubscriptionsByReferralEnduser(
    $referralEnduserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelActionPageSubscriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ActionPageSubscriptionsByReferralEnduser(
      referralEnduserID: $referralEnduserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        actionPageID
        enduserID
        referralEnduserID
        enduserPoints
        completedActionButtonIDs
        createdAt
        updatedAt
        enduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        referralEnduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        actionPage {
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
        owner
      }
      nextToken
    }
  }
`;
export const getActionPageButton = /* GraphQL */ `
  query GetActionPageButton($id: ID!) {
    getActionPageButton(id: $id) {
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
      actionpage {
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
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
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
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
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
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      owner
      enduserCompletedActions {
        items {
          id
          enduserID
          actionID
          actionPageID
          artistID
          isExpired
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionPage {
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
          }
          action {
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
          owner
        }
        nextToken
      }
    }
  }
`;
export const listActionPageButtons = /* GraphQL */ `
  query ListActionPageButtons(
    $filter: ModelActionPageButtonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionPageButtons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        actionpage {
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
        owner
        enduserCompletedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
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
`;
export const getEnduserCompletedActions = /* GraphQL */ `
  query GetEnduserCompletedActions($id: ID!) {
    getEnduserCompletedActions(id: $id) {
      id
      enduserID
      actionID
      actionPageID
      artistID
      isExpired
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        route
        createdAt
        updatedAt
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
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
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
        referredSubscribers {
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
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionPage {
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
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
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
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
          }
          owner
          actionPages {
            nextToken
          }
        }
        owner
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
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
      }
      action {
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
        actionpage {
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
        owner
        enduserCompletedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const listEnduserCompletedActionss = /* GraphQL */ `
  query ListEnduserCompletedActionss(
    $filter: ModelEnduserCompletedActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnduserCompletedActionss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        enduserID
        actionID
        actionPageID
        artistID
        isExpired
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        enduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        actionPage {
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
        action {
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
          actionpage {
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
          }
          owner
          enduserCompletedActions {
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const enduserCompletedActionsByActionPage = /* GraphQL */ `
  query EnduserCompletedActionsByActionPage(
    $actionPageID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserCompletedActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserCompletedActionsByActionPage(
      actionPageID: $actionPageID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        enduserID
        actionID
        actionPageID
        artistID
        isExpired
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        enduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        actionPage {
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
        action {
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
          actionpage {
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
          }
          owner
          enduserCompletedActions {
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const enduserCompletedActionsByActionButton = /* GraphQL */ `
  query EnduserCompletedActionsByActionButton(
    $actionID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserCompletedActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserCompletedActionsByActionButton(
      actionID: $actionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        enduserID
        actionID
        actionPageID
        artistID
        isExpired
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        enduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        actionPage {
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
        action {
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
          actionpage {
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
          }
          owner
          enduserCompletedActions {
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const enduserCompletedActionsByEnduserAndActionPage = /* GraphQL */ `
  query EnduserCompletedActionsByEnduserAndActionPage(
    $actionPageID: ID
    $enduserID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserCompletedActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserCompletedActionsByEnduserAndActionPage(
      actionPageID: $actionPageID
      enduserID: $enduserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        enduserID
        actionID
        actionPageID
        artistID
        isExpired
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        enduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        actionPage {
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
        action {
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
          actionpage {
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
          }
          owner
          enduserCompletedActions {
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const enduserCompletedActionsByEnduser = /* GraphQL */ `
  query EnduserCompletedActionsByEnduser(
    $enduserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEnduserCompletedActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EnduserCompletedActionsByEnduser(
      enduserID: $enduserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        enduserID
        actionID
        actionPageID
        artistID
        isExpired
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        enduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        actionPage {
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
        action {
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
          actionpage {
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
          }
          owner
          enduserCompletedActions {
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
      id
      publicUrl
      name
      owner
      visibility
      createdAt
      file {
        bucket
        region
        key
      }
      updatedAt
    }
  }
`;
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        publicUrl
        name
        owner
        visibility
        createdAt
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContest = /* GraphQL */ `
  query GetContest($id: ID!) {
    getContest(id: $id) {
      id
      headline
      description
      encouragementHeadline
      encouragementDescription
      landingButtonText
      deadline
      artistID
      pictureID
      testPictureUrl
      streetTeamUrl
      spotifyPlayUrl
      spotifyFollowPlaylistUrl
      spotifyFollowArtistUrl
      spotifySaveUrl
      createdAt
      updatedAt
      artist {
        id
        name
        genre
        route
        createdAt
        updatedAt
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
            owner
          }
          nextToken
        }
        contests {
          items {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      picture {
        id
        publicUrl
        name
        owner
        visibility
        createdAt
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      owner
      actions {
        items {
          id
          preActionText
          postActionText
          pointValue
          contestID
          actionType {
            id
            value
            createdAt
            updatedAt
            owner
          }
          url
          createdAt
          updatedAt
          contest {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          owner
          enduserActions {
            nextToken
          }
        }
        nextToken
      }
      subscribers {
        items {
          id
          contestID
          enduserID
          referralEnduserID
          enduserPoints
          completeStreetTeamJoin
          completeSpotifyFollow
          completeSpotifySave
          completeSpotifyPlay
          createdAt
          updatedAt
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          referralEnduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          contest {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
      }
    }
  }
`;
export const listContests = /* GraphQL */ `
  query ListContests(
    $filter: ModelContestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        pictureID
        testPictureUrl
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
        owner
        actions {
          items {
            id
            preActionText
            postActionText
            pointValue
            contestID
            url
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        subscribers {
          items {
            id
            contestID
            enduserID
            referralEnduserID
            enduserPoints
            completeStreetTeamJoin
            completeSpotifyFollow
            completeSpotifySave
            completeSpotifyPlay
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
`;
export const getContestAction = /* GraphQL */ `
  query GetContestAction($id: ID!) {
    getContestAction(id: $id) {
      id
      preActionText
      postActionText
      pointValue
      contestID
      actionType {
        id
        value
        createdAt
        updatedAt
        owner
      }
      url
      createdAt
      updatedAt
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        pictureID
        testPictureUrl
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
        owner
        actions {
          items {
            id
            preActionText
            postActionText
            pointValue
            contestID
            url
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        subscribers {
          items {
            id
            contestID
            enduserID
            referralEnduserID
            enduserPoints
            completeStreetTeamJoin
            completeSpotifyFollow
            completeSpotifySave
            completeSpotifyPlay
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
      enduserActions {
        items {
          id
          enduserID
          enduser {
            id
            username
            firstName
            lastName
            email
            phone
            profileName
            profilePicture
            profileDescription
            profileSocialLink
            createdAt
            updatedAt
            owner
          }
          actionID
          action {
            id
            preActionText
            postActionText
            pointValue
            contestID
            url
            createdAt
            updatedAt
            owner
          }
          status
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listContestActions = /* GraphQL */ `
  query ListContestActions(
    $filter: ModelContestActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContestActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        preActionText
        postActionText
        pointValue
        contestID
        actionType {
          id
          value
          createdAt
          updatedAt
          owner
        }
        url
        createdAt
        updatedAt
        contest {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
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
          owner
          actions {
            nextToken
          }
          subscribers {
            nextToken
          }
        }
        owner
        enduserActions {
          items {
            id
            enduserID
            actionID
            status
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
`;
export const getActionType = /* GraphQL */ `
  query GetActionType($id: ID!) {
    getActionType(id: $id) {
      id
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listActionTypes = /* GraphQL */ `
  query ListActionTypes(
    $filter: ModelActionTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        value
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getContestSubscription = /* GraphQL */ `
  query GetContestSubscription($id: ID!) {
    getContestSubscription(id: $id) {
      id
      contestID
      enduserID
      referralEnduserID
      enduserPoints
      completeStreetTeamJoin
      completeSpotifyFollow
      completeSpotifySave
      completeSpotifyPlay
      createdAt
      updatedAt
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
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
        referredSubscribers {
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
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      referralEnduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
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
        referredSubscribers {
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
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        pictureID
        testPictureUrl
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
        artist {
          id
          name
          genre
          route
          createdAt
          updatedAt
          owner
          actionPages {
            nextToken
          }
          contests {
            nextToken
          }
        }
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          file {
            bucket
            region
            key
          }
          updatedAt
        }
        owner
        actions {
          items {
            id
            preActionText
            postActionText
            pointValue
            contestID
            url
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        subscribers {
          items {
            id
            contestID
            enduserID
            referralEnduserID
            enduserPoints
            completeStreetTeamJoin
            completeSpotifyFollow
            completeSpotifySave
            completeSpotifyPlay
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      owner
    }
  }
`;
export const listContestSubscriptions = /* GraphQL */ `
  query ListContestSubscriptions(
    $filter: ModelContestSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContestSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contestID
        enduserID
        referralEnduserID
        enduserPoints
        completeStreetTeamJoin
        completeSpotifyFollow
        completeSpotifySave
        completeSpotifyPlay
        createdAt
        updatedAt
        enduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        referralEnduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        contest {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
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
          owner
          actions {
            nextToken
          }
          subscribers {
            nextToken
          }
        }
        owner
      }
      nextToken
    }
  }
`;
export const getEnduserContestActions = /* GraphQL */ `
  query GetEnduserContestActions($id: ID!) {
    getEnduserContestActions(id: $id) {
      id
      enduserID
      enduser {
        id
        username
        firstName
        lastName
        email
        phone
        profileName
        profilePicture
        profileDescription
        profileSocialLink
        createdAt
        updatedAt
        owner
        actionPageSubscriptions {
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
        referredSubscribers {
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
        completedActions {
          items {
            id
            enduserID
            actionID
            actionPageID
            artistID
            isExpired
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      actionID
      action {
        id
        preActionText
        postActionText
        pointValue
        contestID
        actionType {
          id
          value
          createdAt
          updatedAt
          owner
        }
        url
        createdAt
        updatedAt
        contest {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
          artist {
            id
            name
            genre
            route
            createdAt
            updatedAt
            owner
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
          owner
          actions {
            nextToken
          }
          subscribers {
            nextToken
          }
        }
        owner
        enduserActions {
          items {
            id
            enduserID
            actionID
            status
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEnduserContestActionss = /* GraphQL */ `
  query ListEnduserContestActionss(
    $filter: ModelEnduserContestActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnduserContestActionss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        enduserID
        enduser {
          id
          username
          firstName
          lastName
          email
          phone
          profileName
          profilePicture
          profileDescription
          profileSocialLink
          createdAt
          updatedAt
          owner
          actionPageSubscriptions {
            nextToken
          }
          referredSubscribers {
            nextToken
          }
          completedActions {
            nextToken
          }
        }
        actionID
        action {
          id
          preActionText
          postActionText
          pointValue
          contestID
          actionType {
            id
            value
            createdAt
            updatedAt
            owner
          }
          url
          createdAt
          updatedAt
          contest {
            id
            headline
            description
            encouragementHeadline
            encouragementDescription
            landingButtonText
            deadline
            artistID
            pictureID
            testPictureUrl
            streetTeamUrl
            spotifyPlayUrl
            spotifyFollowPlaylistUrl
            spotifyFollowArtistUrl
            spotifySaveUrl
            createdAt
            updatedAt
            owner
          }
          owner
          enduserActions {
            nextToken
          }
        }
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
