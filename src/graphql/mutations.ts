/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createActress = /* GraphQL */ `
  mutation CreateActress(
    $input: CreateActressInput!
    $condition: ModelActressConditionInput
  ) {
    createActress(input: $input, condition: $condition) {
      id
      name
      ruby
      bust
      cup
      waist
      hip
      height
      birthday
      blood_type
      hobby
      prefectures
      imageURL {
        id
        small
        large
        actressID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      listURL {
        id
        digital
        monthly
        mono
        rental
        actressID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateActress = /* GraphQL */ `
  mutation UpdateActress(
    $input: UpdateActressInput!
    $condition: ModelActressConditionInput
  ) {
    updateActress(input: $input, condition: $condition) {
      id
      name
      ruby
      bust
      cup
      waist
      hip
      height
      birthday
      blood_type
      hobby
      prefectures
      imageURL {
        id
        small
        large
        actressID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      listURL {
        id
        digital
        monthly
        mono
        rental
        actressID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteActress = /* GraphQL */ `
  mutation DeleteActress(
    $input: DeleteActressInput!
    $condition: ModelActressConditionInput
  ) {
    deleteActress(input: $input, condition: $condition) {
      id
      name
      ruby
      bust
      cup
      waist
      hip
      height
      birthday
      blood_type
      hobby
      prefectures
      imageURL {
        id
        small
        large
        actressID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      listURL {
        id
        digital
        monthly
        mono
        rental
        actressID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createImageURL = /* GraphQL */ `
  mutation CreateImageURL(
    $input: CreateImageURLInput!
    $condition: ModelImageURLConditionInput
  ) {
    createImageURL(input: $input, condition: $condition) {
      id
      small
      large
      actressID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateImageURL = /* GraphQL */ `
  mutation UpdateImageURL(
    $input: UpdateImageURLInput!
    $condition: ModelImageURLConditionInput
  ) {
    updateImageURL(input: $input, condition: $condition) {
      id
      small
      large
      actressID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteImageURL = /* GraphQL */ `
  mutation DeleteImageURL(
    $input: DeleteImageURLInput!
    $condition: ModelImageURLConditionInput
  ) {
    deleteImageURL(input: $input, condition: $condition) {
      id
      small
      large
      actressID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createListURL = /* GraphQL */ `
  mutation CreateListURL(
    $input: CreateListURLInput!
    $condition: ModelListURLConditionInput
  ) {
    createListURL(input: $input, condition: $condition) {
      id
      digital
      monthly
      mono
      rental
      actressID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateListURL = /* GraphQL */ `
  mutation UpdateListURL(
    $input: UpdateListURLInput!
    $condition: ModelListURLConditionInput
  ) {
    updateListURL(input: $input, condition: $condition) {
      id
      digital
      monthly
      mono
      rental
      actressID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteListURL = /* GraphQL */ `
  mutation DeleteListURL(
    $input: DeleteListURLInput!
    $condition: ModelListURLConditionInput
  ) {
    deleteListURL(input: $input, condition: $condition) {
      id
      digital
      monthly
      mono
      rental
      actressID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
