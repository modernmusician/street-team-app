/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createContestDetails = /* GraphQL */ `
  mutation CreateContestDetails(
    $input: CreateContestDetailsInput!
    $condition: ModelContestDetailsConditionInput
  ) {
    createContestDetails(input: $input, condition: $condition) {
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
export const updateContestDetails = /* GraphQL */ `
  mutation UpdateContestDetails(
    $input: UpdateContestDetailsInput!
    $condition: ModelContestDetailsConditionInput
  ) {
    updateContestDetails(input: $input, condition: $condition) {
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
export const deleteContestDetails = /* GraphQL */ `
  mutation DeleteContestDetails(
    $input: DeleteContestDetailsInput!
    $condition: ModelContestDetailsConditionInput
  ) {
    deleteContestDetails(input: $input, condition: $condition) {
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
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
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
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
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
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
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
