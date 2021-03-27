/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
      id
      name
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
      id
      name
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
      id
      name
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createContest = /* GraphQL */ `
  mutation CreateContest(
    $input: CreateContestInput!
    $condition: ModelContestConditionInput
  ) {
    createContest(input: $input, condition: $condition) {
      id
      headline
      description
      encouragementHeadline
      encouragementDescription
      landingButtonText
      deadline
      artistID
      artist {
        id
        name
        contests {
          nextToken
        }
        createdAt
        updatedAt
      }
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
        }
        nextToken
      }
      pictureID
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
      testPictureUrl
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
        }
        nextToken
      }
      streetTeamUrl
      spotifyPlayUrl
      spotifyFollowPlaylistUrl
      spotifyFollowArtistUrl
      spotifySaveUrl
      createdAt
      updatedAt
    }
  }
`;
export const updateContest = /* GraphQL */ `
  mutation UpdateContest(
    $input: UpdateContestInput!
    $condition: ModelContestConditionInput
  ) {
    updateContest(input: $input, condition: $condition) {
      id
      headline
      description
      encouragementHeadline
      encouragementDescription
      landingButtonText
      deadline
      artistID
      artist {
        id
        name
        contests {
          nextToken
        }
        createdAt
        updatedAt
      }
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
        }
        nextToken
      }
      pictureID
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
      testPictureUrl
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
        }
        nextToken
      }
      streetTeamUrl
      spotifyPlayUrl
      spotifyFollowPlaylistUrl
      spotifyFollowArtistUrl
      spotifySaveUrl
      createdAt
      updatedAt
    }
  }
`;
export const deleteContest = /* GraphQL */ `
  mutation DeleteContest(
    $input: DeleteContestInput!
    $condition: ModelContestConditionInput
  ) {
    deleteContest(input: $input, condition: $condition) {
      id
      headline
      description
      encouragementHeadline
      encouragementDescription
      landingButtonText
      deadline
      artistID
      artist {
        id
        name
        contests {
          nextToken
        }
        createdAt
        updatedAt
      }
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
        }
        nextToken
      }
      pictureID
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
      testPictureUrl
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
        }
        nextToken
      }
      streetTeamUrl
      spotifyPlayUrl
      spotifyFollowPlaylistUrl
      spotifyFollowArtistUrl
      spotifySaveUrl
      createdAt
      updatedAt
    }
  }
`;
export const createContestAction = /* GraphQL */ `
  mutation CreateContestAction(
    $input: CreateContestActionInput!
    $condition: ModelContestActionConditionInput
  ) {
    createContestAction(input: $input, condition: $condition) {
      id
      preActionText
      postActionText
      pointValue
      contestID
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        artist {
          id
          name
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        pictureID
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          updatedAt
        }
        testPictureUrl
        subscribers {
          nextToken
        }
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
      }
      enduserActions {
        items {
          enduserID
          actionID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      actionType {
        id
        value
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
  }
`;
export const updateContestAction = /* GraphQL */ `
  mutation UpdateContestAction(
    $input: UpdateContestActionInput!
    $condition: ModelContestActionConditionInput
  ) {
    updateContestAction(input: $input, condition: $condition) {
      id
      preActionText
      postActionText
      pointValue
      contestID
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        artist {
          id
          name
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        pictureID
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          updatedAt
        }
        testPictureUrl
        subscribers {
          nextToken
        }
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
      }
      enduserActions {
        items {
          enduserID
          actionID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      actionType {
        id
        value
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
  }
`;
export const deleteContestAction = /* GraphQL */ `
  mutation DeleteContestAction(
    $input: DeleteContestActionInput!
    $condition: ModelContestActionConditionInput
  ) {
    deleteContestAction(input: $input, condition: $condition) {
      id
      preActionText
      postActionText
      pointValue
      contestID
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        artist {
          id
          name
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        pictureID
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          updatedAt
        }
        testPictureUrl
        subscribers {
          nextToken
        }
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
      }
      enduserActions {
        items {
          enduserID
          actionID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      actionType {
        id
        value
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
  }
`;
export const createActionType = /* GraphQL */ `
  mutation CreateActionType(
    $input: CreateActionTypeInput!
    $condition: ModelActionTypeConditionInput
  ) {
    createActionType(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateActionType = /* GraphQL */ `
  mutation UpdateActionType(
    $input: UpdateActionTypeInput!
    $condition: ModelActionTypeConditionInput
  ) {
    updateActionType(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteActionType = /* GraphQL */ `
  mutation DeleteActionType(
    $input: DeleteActionTypeInput!
    $condition: ModelActionTypeConditionInput
  ) {
    deleteActionType(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const createContestSubscription = /* GraphQL */ `
  mutation CreateContestSubscription(
    $input: CreateContestSubscriptionInput!
    $condition: ModelContestSubscriptionConditionInput
  ) {
    createContestSubscription(input: $input, condition: $condition) {
      id
      contestID
      enduserID
      enduserPoints
      completeStreetTeamJoin
      completeSpotifyFollow
      completeSpotifySave
      completeSpotifyPlay
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        artist {
          id
          name
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        pictureID
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          updatedAt
        }
        testPictureUrl
        subscribers {
          nextToken
        }
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
      }
      enduser {
        id
        username
        firstName
        lastName
        actions {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateContestSubscription = /* GraphQL */ `
  mutation UpdateContestSubscription(
    $input: UpdateContestSubscriptionInput!
    $condition: ModelContestSubscriptionConditionInput
  ) {
    updateContestSubscription(input: $input, condition: $condition) {
      id
      contestID
      enduserID
      enduserPoints
      completeStreetTeamJoin
      completeSpotifyFollow
      completeSpotifySave
      completeSpotifyPlay
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        artist {
          id
          name
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        pictureID
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          updatedAt
        }
        testPictureUrl
        subscribers {
          nextToken
        }
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
      }
      enduser {
        id
        username
        firstName
        lastName
        actions {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteContestSubscription = /* GraphQL */ `
  mutation DeleteContestSubscription(
    $input: DeleteContestSubscriptionInput!
    $condition: ModelContestSubscriptionConditionInput
  ) {
    deleteContestSubscription(input: $input, condition: $condition) {
      id
      contestID
      enduserID
      enduserPoints
      completeStreetTeamJoin
      completeSpotifyFollow
      completeSpotifySave
      completeSpotifyPlay
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        artist {
          id
          name
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        pictureID
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          updatedAt
        }
        testPictureUrl
        subscribers {
          nextToken
        }
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
      }
      enduser {
        id
        username
        firstName
        lastName
        actions {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEnduser = /* GraphQL */ `
  mutation CreateEnduser(
    $input: CreateEnduserInput!
    $condition: ModelEnduserConditionInput
  ) {
    createEnduser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      actions {
        items {
          enduserID
          actionID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEnduser = /* GraphQL */ `
  mutation UpdateEnduser(
    $input: UpdateEnduserInput!
    $condition: ModelEnduserConditionInput
  ) {
    updateEnduser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      actions {
        items {
          enduserID
          actionID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEnduser = /* GraphQL */ `
  mutation DeleteEnduser(
    $input: DeleteEnduserInput!
    $condition: ModelEnduserConditionInput
  ) {
    deleteEnduser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      actions {
        items {
          enduserID
          actionID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEnduserActions = /* GraphQL */ `
  mutation CreateEnduserActions(
    $input: CreateEnduserActionsInput!
    $condition: ModelEnduserActionsConditionInput
  ) {
    createEnduserActions(input: $input, condition: $condition) {
      enduserID
      enduser {
        id
        username
        firstName
        lastName
        actions {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      actionID
      action {
        id
        preActionText
        postActionText
        pointValue
        contestID
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
        }
        enduserActions {
          nextToken
        }
        actionType {
          id
          value
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateEnduserActions = /* GraphQL */ `
  mutation UpdateEnduserActions(
    $input: UpdateEnduserActionsInput!
    $condition: ModelEnduserActionsConditionInput
  ) {
    updateEnduserActions(input: $input, condition: $condition) {
      enduserID
      enduser {
        id
        username
        firstName
        lastName
        actions {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      actionID
      action {
        id
        preActionText
        postActionText
        pointValue
        contestID
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
        }
        enduserActions {
          nextToken
        }
        actionType {
          id
          value
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteEnduserActions = /* GraphQL */ `
  mutation DeleteEnduserActions(
    $input: DeleteEnduserActionsInput!
    $condition: ModelEnduserActionsConditionInput
  ) {
    deleteEnduserActions(input: $input, condition: $condition) {
      enduserID
      enduser {
        id
        username
        firstName
        lastName
        actions {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      actionID
      action {
        id
        preActionText
        postActionText
        pointValue
        contestID
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
        }
        enduserActions {
          nextToken
        }
        actionType {
          id
          value
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
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
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
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
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
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
