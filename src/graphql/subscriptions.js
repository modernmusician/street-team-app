/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist($owner: String) {
    onCreateArtist(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
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
  }
`;
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist($owner: String) {
    onUpdateArtist(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
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
  }
`;
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist($owner: String) {
    onDeleteArtist(owner: $owner) {
      id
      name
      createdAt
      updatedAt
      owner
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
  }
`;
export const onCreateContest = /* GraphQL */ `
  subscription OnCreateContest($owner: String) {
    onCreateContest(owner: $owner) {
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
        createdAt
        updatedAt
        owner
        contests {
          nextToken
        }
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
export const onUpdateContest = /* GraphQL */ `
  subscription OnUpdateContest($owner: String) {
    onUpdateContest(owner: $owner) {
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
        createdAt
        updatedAt
        owner
        contests {
          nextToken
        }
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
export const onDeleteContest = /* GraphQL */ `
  subscription OnDeleteContest($owner: String) {
    onDeleteContest(owner: $owner) {
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
        createdAt
        updatedAt
        owner
        contests {
          nextToken
        }
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
export const onCreateContestAction = /* GraphQL */ `
  subscription OnCreateContestAction($owner: String) {
    onCreateContestAction(owner: $owner) {
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
          createdAt
          updatedAt
          owner
        }
        owner
        actions {
          nextToken
        }
        subscribers {
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
  }
`;
export const onUpdateContestAction = /* GraphQL */ `
  subscription OnUpdateContestAction($owner: String) {
    onUpdateContestAction(owner: $owner) {
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
          createdAt
          updatedAt
          owner
        }
        owner
        actions {
          nextToken
        }
        subscribers {
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
  }
`;
export const onDeleteContestAction = /* GraphQL */ `
  subscription OnDeleteContestAction($owner: String) {
    onDeleteContestAction(owner: $owner) {
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
          createdAt
          updatedAt
          owner
        }
        owner
        actions {
          nextToken
        }
        subscribers {
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
  }
`;
export const onCreateActionType = /* GraphQL */ `
  subscription OnCreateActionType($owner: String) {
    onCreateActionType(owner: $owner) {
      id
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateActionType = /* GraphQL */ `
  subscription OnUpdateActionType($owner: String) {
    onUpdateActionType(owner: $owner) {
      id
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteActionType = /* GraphQL */ `
  subscription OnDeleteActionType($owner: String) {
    onDeleteActionType(owner: $owner) {
      id
      value
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateContestSubscription = /* GraphQL */ `
  subscription OnCreateContestSubscription($owner: String) {
    onCreateContestSubscription(owner: $owner) {
      id
      contestID
      enduserID
      enduserPoints
      completeStreetTeamJoin
      completeSpotifyFollow
      completeSpotifySave
      completeSpotifyPlay
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
          createdAt
          updatedAt
          owner
        }
        owner
        actions {
          nextToken
        }
        subscribers {
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
      enduser {
        id
        username
        firstName
        lastName
        createdAt
        updatedAt
        subscriptions {
          nextToken
        }
        owner
        actions {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateContestSubscription = /* GraphQL */ `
  subscription OnUpdateContestSubscription($owner: String) {
    onUpdateContestSubscription(owner: $owner) {
      id
      contestID
      enduserID
      enduserPoints
      completeStreetTeamJoin
      completeSpotifyFollow
      completeSpotifySave
      completeSpotifyPlay
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
          createdAt
          updatedAt
          owner
        }
        owner
        actions {
          nextToken
        }
        subscribers {
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
      enduser {
        id
        username
        firstName
        lastName
        createdAt
        updatedAt
        subscriptions {
          nextToken
        }
        owner
        actions {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteContestSubscription = /* GraphQL */ `
  subscription OnDeleteContestSubscription($owner: String) {
    onDeleteContestSubscription(owner: $owner) {
      id
      contestID
      enduserID
      enduserPoints
      completeStreetTeamJoin
      completeSpotifyFollow
      completeSpotifySave
      completeSpotifyPlay
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
          createdAt
          updatedAt
          owner
        }
        owner
        actions {
          nextToken
        }
        subscribers {
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
      enduser {
        id
        username
        firstName
        lastName
        createdAt
        updatedAt
        subscriptions {
          nextToken
        }
        owner
        actions {
          nextToken
        }
      }
    }
  }
`;
export const onCreateEnduser = /* GraphQL */ `
  subscription OnCreateEnduser($owner: String) {
    onCreateEnduser(owner: $owner) {
      id
      username
      firstName
      lastName
      createdAt
      updatedAt
      subscriptions {
        items {
          id
          contestID
          enduserID
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
      owner
      actions {
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
  }
`;
export const onUpdateEnduser = /* GraphQL */ `
  subscription OnUpdateEnduser($owner: String) {
    onUpdateEnduser(owner: $owner) {
      id
      username
      firstName
      lastName
      createdAt
      updatedAt
      subscriptions {
        items {
          id
          contestID
          enduserID
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
      owner
      actions {
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
  }
`;
export const onDeleteEnduser = /* GraphQL */ `
  subscription OnDeleteEnduser($owner: String) {
    onDeleteEnduser(owner: $owner) {
      id
      username
      firstName
      lastName
      createdAt
      updatedAt
      subscriptions {
        items {
          id
          contestID
          enduserID
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
      owner
      actions {
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
  }
`;
export const onCreateEnduserActions = /* GraphQL */ `
  subscription OnCreateEnduserActions($owner: String) {
    onCreateEnduserActions(owner: $owner) {
      id
      enduserID
      enduser {
        id
        username
        firstName
        lastName
        createdAt
        updatedAt
        subscriptions {
          nextToken
        }
        owner
        actions {
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
  }
`;
export const onUpdateEnduserActions = /* GraphQL */ `
  subscription OnUpdateEnduserActions($owner: String) {
    onUpdateEnduserActions(owner: $owner) {
      id
      enduserID
      enduser {
        id
        username
        firstName
        lastName
        createdAt
        updatedAt
        subscriptions {
          nextToken
        }
        owner
        actions {
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
  }
`;
export const onDeleteEnduserActions = /* GraphQL */ `
  subscription OnDeleteEnduserActions($owner: String) {
    onDeleteEnduserActions(owner: $owner) {
      id
      enduserID
      enduser {
        id
        username
        firstName
        lastName
        createdAt
        updatedAt
        subscriptions {
          nextToken
        }
        owner
        actions {
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
  }
`;
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture($owner: String) {
    onCreatePicture(owner: $owner) {
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture($owner: String) {
    onUpdatePicture(owner: $owner) {
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture($owner: String) {
    onDeletePicture(owner: $owner) {
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
