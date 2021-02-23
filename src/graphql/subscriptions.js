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
          landingButtonText
          deadline
          artistID
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
          landingButtonText
          deadline
          artistID
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
          landingButtonText
          deadline
          artistID
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
          content
          pointValue
          contestID
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      picture {
        id
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
          content
          pointValue
          contestID
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      picture {
        id
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
          content
          pointValue
          contestID
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      picture {
        id
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateContestAction = /* GraphQL */ `
  subscription OnCreateContestAction {
    onCreateContestAction {
      id
      content
      pointValue
      contestID
      contest {
        id
        headline
        description
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
        picture {
          id
          name
          owner
          visibility
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      enduserActions {
        items {
          enduserID
          actionID
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
      content
      pointValue
      contestID
      contest {
        id
        headline
        description
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
        picture {
          id
          name
          owner
          visibility
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      enduserActions {
        items {
          enduserID
          actionID
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
      content
      pointValue
      contestID
      contest {
        id
        headline
        description
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
        picture {
          id
          name
          owner
          visibility
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      enduserActions {
        items {
          enduserID
          actionID
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
export const onCreateEnduser = /* GraphQL */ `
  subscription OnCreateEnduser {
    onCreateEnduser {
      id
      username
      actions {
        items {
          enduserID
          actionID
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
        createdAt
        updatedAt
      }
      actionID
      action {
        id
        content
        pointValue
        contestID
        contest {
          id
          headline
          description
          landingButtonText
          deadline
          artistID
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
        createdAt
        updatedAt
      }
      actionID
      action {
        id
        content
        pointValue
        contestID
        contest {
          id
          headline
          description
          landingButtonText
          deadline
          artistID
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
        createdAt
        updatedAt
      }
      actionID
      action {
        id
        content
        pointValue
        contestID
        contest {
          id
          headline
          description
          landingButtonText
          deadline
          artistID
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture {
    onCreatePicture {
      id
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
