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
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
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
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
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
      owner
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
      owner
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
      owner
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
      referralEnduserID
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
      referralEnduser {
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
export const updateContestSubscription = /* GraphQL */ `
  mutation UpdateContestSubscription(
    $input: UpdateContestSubscriptionInput!
    $condition: ModelContestSubscriptionConditionInput
  ) {
    updateContestSubscription(input: $input, condition: $condition) {
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
      referralEnduser {
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
export const deleteContestSubscription = /* GraphQL */ `
  mutation DeleteContestSubscription(
    $input: DeleteContestSubscriptionInput!
    $condition: ModelContestSubscriptionConditionInput
  ) {
    deleteContestSubscription(input: $input, condition: $condition) {
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
      referralEnduser {
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
      createdAt
      updatedAt
      subscriptions {
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
      createdAt
      updatedAt
      subscriptions {
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
      createdAt
      updatedAt
      subscriptions {
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
export const createEnduserActions = /* GraphQL */ `
  mutation CreateEnduserActions(
    $input: CreateEnduserActionsInput!
    $condition: ModelEnduserActionsConditionInput
  ) {
    createEnduserActions(input: $input, condition: $condition) {
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
export const updateEnduserActions = /* GraphQL */ `
  mutation UpdateEnduserActions(
    $input: UpdateEnduserActionsInput!
    $condition: ModelEnduserActionsConditionInput
  ) {
    updateEnduserActions(input: $input, condition: $condition) {
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
export const deleteEnduserActions = /* GraphQL */ `
  mutation DeleteEnduserActions(
    $input: DeleteEnduserActionsInput!
    $condition: ModelEnduserActionsConditionInput
  ) {
    deleteEnduserActions(input: $input, condition: $condition) {
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
