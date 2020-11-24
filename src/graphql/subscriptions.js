/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateContestDetails = /* GraphQL */ `
  subscription OnCreateContestDetails {
    onCreateContestDetails {
      id
      headline
      description
      landingButtonText
      deadline
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContestDetails = /* GraphQL */ `
  subscription OnUpdateContestDetails {
    onUpdateContestDetails {
      id
      headline
      description
      landingButtonText
      deadline
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContestDetails = /* GraphQL */ `
  subscription OnDeleteContestDetails {
    onDeleteContestDetails {
      id
      headline
      description
      landingButtonText
      deadline
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture($owner: String!) {
    onCreatePicture(owner: $owner) {
      id
      name
      owner
      visibility
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture($owner: String!) {
    onUpdatePicture(owner: $owner) {
      id
      name
      owner
      visibility
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture($owner: String!) {
    onDeletePicture(owner: $owner) {
      id
      name
      owner
      visibility
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
