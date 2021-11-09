/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncActresses = /* GraphQL */ `
  query SyncActresses(
    $filter: ModelActressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getActress = /* GraphQL */ `
  query GetActress($id: ID!) {
    getActress(id: $id) {
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
export const listActresses = /* GraphQL */ `
  query ListActresses(
    $filter: ModelActressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncImageURLS = /* GraphQL */ `
  query SyncImageURLS(
    $filter: ModelImageURLFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncImageURLS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getImageURL = /* GraphQL */ `
  query GetImageURL($id: ID!) {
    getImageURL(id: $id) {
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
export const listImageURLS = /* GraphQL */ `
  query ListImageURLS(
    $filter: ModelImageURLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImageURLS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncListURLS = /* GraphQL */ `
  query SyncListURLS(
    $filter: ModelListURLFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncListURLS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getListURL = /* GraphQL */ `
  query GetListURL($id: ID!) {
    getListURL(id: $id) {
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
export const listListURLS = /* GraphQL */ `
  query ListListURLS(
    $filter: ModelListURLFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListURLS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
