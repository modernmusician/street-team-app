/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist {
    onCreateArtist {
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
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist {
    onUpdateArtist {
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
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist {
    onDeleteArtist {
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
export const onCreateContest = /* GraphQL */ `
  subscription OnCreateContest {
    onCreateContest {
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
export const onUpdateContest = /* GraphQL */ `
  subscription OnUpdateContest {
    onUpdateContest {
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
export const onDeleteContest = /* GraphQL */ `
  subscription OnDeleteContest {
    onDeleteContest {
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
export const onCreateContestAction = /* GraphQL */ `
  subscription OnCreateContestAction {
    onCreateContestAction {
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
export const onUpdateContestAction = /* GraphQL */ `
  subscription OnUpdateContestAction {
    onUpdateContestAction {
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
export const onDeleteContestAction = /* GraphQL */ `
  subscription OnDeleteContestAction {
    onDeleteContestAction {
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
export const onCreateActionType = /* GraphQL */ `
  subscription OnCreateActionType {
    onCreateActionType {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateActionType = /* GraphQL */ `
  subscription OnUpdateActionType {
    onUpdateActionType {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteActionType = /* GraphQL */ `
  subscription OnDeleteActionType {
    onDeleteActionType {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onCreateContestSubscription = /* GraphQL */ `
  subscription OnCreateContestSubscription {
    onCreateContestSubscription {
      id
      contestID
      enduserID
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
        createdAt
        updatedAt
      }
      enduser {
        id
        username
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
export const onUpdateContestSubscription = /* GraphQL */ `
  subscription OnUpdateContestSubscription {
    onUpdateContestSubscription {
      id
      contestID
      enduserID
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
        createdAt
        updatedAt
      }
      enduser {
        id
        username
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
export const onDeleteContestSubscription = /* GraphQL */ `
  subscription OnDeleteContestSubscription {
    onDeleteContestSubscription {
      id
      contestID
      enduserID
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
        createdAt
        updatedAt
      }
      enduser {
        id
        username
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
export const onCreateEnduser = /* GraphQL */ `
  subscription OnCreateEnduser {
    onCreateEnduser {
      id
      username
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
export const onUpdateEnduser = /* GraphQL */ `
  subscription OnUpdateEnduser {
    onUpdateEnduser {
      id
      username
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
export const onDeleteEnduser = /* GraphQL */ `
  subscription OnDeleteEnduser {
    onDeleteEnduser {
      id
      username
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
export const onCreateEnduserActions = /* GraphQL */ `
  subscription OnCreateEnduserActions {
    onCreateEnduserActions {
      enduserID
      enduser {
        id
        username
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
export const onUpdateEnduserActions = /* GraphQL */ `
  subscription OnUpdateEnduserActions {
    onUpdateEnduserActions {
      enduserID
      enduser {
        id
        username
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
export const onDeleteEnduserActions = /* GraphQL */ `
  subscription OnDeleteEnduserActions {
    onDeleteEnduserActions {
      enduserID
      enduser {
        id
        username
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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture {
    onCreatePicture {
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
  subscription OnUpdatePicture {
    onUpdatePicture {
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
  subscription OnDeletePicture {
    onDeletePicture {
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
