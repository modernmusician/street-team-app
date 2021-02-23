/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
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
        contests {
          nextToken
        }
        createdAt
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
      nextToken
    }
  }
`;
export const getContestAction = /* GraphQL */ `
  query GetContestAction($id: ID!) {
    getContestAction(id: $id) {
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
export const listContestActions = /* GraphQL */ `
  query ListContestActions(
    $filter: ModelContestActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContestActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        actions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEnduserActions = /* GraphQL */ `
  query GetEnduserActions($id: ID!) {
    getEnduserActions(id: $id) {
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
export const listEnduserActionss = /* GraphQL */ `
  query ListEnduserActionss(
    $filter: ModelEnduserActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnduserActionss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        enduserID
        enduser {
          id
          username
          createdAt
          updatedAt
        }
        actionID
        action {
          id
          content
          pointValue
          contestID
          url
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
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
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
