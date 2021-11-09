/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateActressInput = {
  id?: string | null,
  name?: string | null,
  ruby?: string | null,
  bust?: string | null,
  cup?: string | null,
  waist?: string | null,
  hip?: string | null,
  height?: string | null,
  birthday?: string | null,
  blood_type?: string | null,
  hobby?: string | null,
  prefectures?: string | null,
  _version?: number | null,
  actressImageURLId?: string | null,
  actressListURLId?: string | null,
};

export type ModelActressConditionInput = {
  name?: ModelStringInput | null,
  ruby?: ModelStringInput | null,
  bust?: ModelStringInput | null,
  cup?: ModelStringInput | null,
  waist?: ModelStringInput | null,
  hip?: ModelStringInput | null,
  height?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  blood_type?: ModelStringInput | null,
  hobby?: ModelStringInput | null,
  prefectures?: ModelStringInput | null,
  and?: Array< ModelActressConditionInput | null > | null,
  or?: Array< ModelActressConditionInput | null > | null,
  not?: ModelActressConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Actress = {
  __typename: "Actress",
  id: string,
  name?: string | null,
  ruby?: string | null,
  bust?: string | null,
  cup?: string | null,
  waist?: string | null,
  hip?: string | null,
  height?: string | null,
  birthday?: string | null,
  blood_type?: string | null,
  hobby?: string | null,
  prefectures?: string | null,
  imageURL?: ImageURL | null,
  listURL?: ListURL | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type ImageURL = {
  __typename: "ImageURL",
  id: string,
  small?: string | null,
  large?: string | null,
  actressID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type ListURL = {
  __typename: "ListURL",
  id: string,
  digital?: string | null,
  monthly?: string | null,
  mono?: string | null,
  rental?: string | null,
  actressID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateActressInput = {
  id: string,
  name?: string | null,
  ruby?: string | null,
  bust?: string | null,
  cup?: string | null,
  waist?: string | null,
  hip?: string | null,
  height?: string | null,
  birthday?: string | null,
  blood_type?: string | null,
  hobby?: string | null,
  prefectures?: string | null,
  _version?: number | null,
  actressImageURLId?: string | null,
  actressListURLId?: string | null,
};

export type DeleteActressInput = {
  id: string,
  _version?: number | null,
};

export type CreateImageURLInput = {
  id?: string | null,
  small?: string | null,
  large?: string | null,
  actressID: string,
  _version?: number | null,
};

export type ModelImageURLConditionInput = {
  small?: ModelStringInput | null,
  large?: ModelStringInput | null,
  actressID?: ModelIDInput | null,
  and?: Array< ModelImageURLConditionInput | null > | null,
  or?: Array< ModelImageURLConditionInput | null > | null,
  not?: ModelImageURLConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateImageURLInput = {
  small?: string | null,
  large?: string | null,
  actressID?: string | null,
  _version?: number | null,
};

export type DeleteImageURLInput = {
  id: string,
  _version?: number | null,
};

export type CreateListURLInput = {
  id?: string | null,
  digital?: string | null,
  monthly?: string | null,
  mono?: string | null,
  rental?: string | null,
  actressID: string,
  _version?: number | null,
};

export type ModelListURLConditionInput = {
  digital?: ModelStringInput | null,
  monthly?: ModelStringInput | null,
  mono?: ModelStringInput | null,
  rental?: ModelStringInput | null,
  actressID?: ModelIDInput | null,
  and?: Array< ModelListURLConditionInput | null > | null,
  or?: Array< ModelListURLConditionInput | null > | null,
  not?: ModelListURLConditionInput | null,
};

export type UpdateListURLInput = {
  digital?: string | null,
  monthly?: string | null,
  mono?: string | null,
  rental?: string | null,
  actressID?: string | null,
  _version?: number | null,
};

export type DeleteListURLInput = {
  id: string,
  _version?: number | null,
};

export type ModelActressFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  ruby?: ModelStringInput | null,
  bust?: ModelStringInput | null,
  cup?: ModelStringInput | null,
  waist?: ModelStringInput | null,
  hip?: ModelStringInput | null,
  height?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  blood_type?: ModelStringInput | null,
  hobby?: ModelStringInput | null,
  prefectures?: ModelStringInput | null,
  and?: Array< ModelActressFilterInput | null > | null,
  or?: Array< ModelActressFilterInput | null > | null,
  not?: ModelActressFilterInput | null,
};

export type ModelActressConnection = {
  __typename: "ModelActressConnection",
  items?:  Array<Actress | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelImageURLFilterInput = {
  small?: ModelStringInput | null,
  large?: ModelStringInput | null,
  actressID?: ModelIDInput | null,
  and?: Array< ModelImageURLFilterInput | null > | null,
  or?: Array< ModelImageURLFilterInput | null > | null,
  not?: ModelImageURLFilterInput | null,
};

export type ModelImageURLConnection = {
  __typename: "ModelImageURLConnection",
  items?:  Array<ImageURL | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelListURLFilterInput = {
  digital?: ModelStringInput | null,
  monthly?: ModelStringInput | null,
  mono?: ModelStringInput | null,
  rental?: ModelStringInput | null,
  actressID?: ModelIDInput | null,
  and?: Array< ModelListURLFilterInput | null > | null,
  or?: Array< ModelListURLFilterInput | null > | null,
  not?: ModelListURLFilterInput | null,
};

export type ModelListURLConnection = {
  __typename: "ModelListURLConnection",
  items?:  Array<ListURL | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateActressMutationVariables = {
  input: CreateActressInput,
  condition?: ModelActressConditionInput | null,
};

export type CreateActressMutation = {
  createActress?:  {
    __typename: "Actress",
    id: string,
    name?: string | null,
    ruby?: string | null,
    bust?: string | null,
    cup?: string | null,
    waist?: string | null,
    hip?: string | null,
    height?: string | null,
    birthday?: string | null,
    blood_type?: string | null,
    hobby?: string | null,
    prefectures?: string | null,
    imageURL?:  {
      __typename: "ImageURL",
      id: string,
      small?: string | null,
      large?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    listURL?:  {
      __typename: "ListURL",
      id: string,
      digital?: string | null,
      monthly?: string | null,
      mono?: string | null,
      rental?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateActressMutationVariables = {
  input: UpdateActressInput,
  condition?: ModelActressConditionInput | null,
};

export type UpdateActressMutation = {
  updateActress?:  {
    __typename: "Actress",
    id: string,
    name?: string | null,
    ruby?: string | null,
    bust?: string | null,
    cup?: string | null,
    waist?: string | null,
    hip?: string | null,
    height?: string | null,
    birthday?: string | null,
    blood_type?: string | null,
    hobby?: string | null,
    prefectures?: string | null,
    imageURL?:  {
      __typename: "ImageURL",
      id: string,
      small?: string | null,
      large?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    listURL?:  {
      __typename: "ListURL",
      id: string,
      digital?: string | null,
      monthly?: string | null,
      mono?: string | null,
      rental?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteActressMutationVariables = {
  input: DeleteActressInput,
  condition?: ModelActressConditionInput | null,
};

export type DeleteActressMutation = {
  deleteActress?:  {
    __typename: "Actress",
    id: string,
    name?: string | null,
    ruby?: string | null,
    bust?: string | null,
    cup?: string | null,
    waist?: string | null,
    hip?: string | null,
    height?: string | null,
    birthday?: string | null,
    blood_type?: string | null,
    hobby?: string | null,
    prefectures?: string | null,
    imageURL?:  {
      __typename: "ImageURL",
      id: string,
      small?: string | null,
      large?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    listURL?:  {
      __typename: "ListURL",
      id: string,
      digital?: string | null,
      monthly?: string | null,
      mono?: string | null,
      rental?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateImageURLMutationVariables = {
  input: CreateImageURLInput,
  condition?: ModelImageURLConditionInput | null,
};

export type CreateImageURLMutation = {
  createImageURL?:  {
    __typename: "ImageURL",
    id: string,
    small?: string | null,
    large?: string | null,
    actressID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateImageURLMutationVariables = {
  input: UpdateImageURLInput,
  condition?: ModelImageURLConditionInput | null,
};

export type UpdateImageURLMutation = {
  updateImageURL?:  {
    __typename: "ImageURL",
    id: string,
    small?: string | null,
    large?: string | null,
    actressID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteImageURLMutationVariables = {
  input: DeleteImageURLInput,
  condition?: ModelImageURLConditionInput | null,
};

export type DeleteImageURLMutation = {
  deleteImageURL?:  {
    __typename: "ImageURL",
    id: string,
    small?: string | null,
    large?: string | null,
    actressID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateListURLMutationVariables = {
  input: CreateListURLInput,
  condition?: ModelListURLConditionInput | null,
};

export type CreateListURLMutation = {
  createListURL?:  {
    __typename: "ListURL",
    id: string,
    digital?: string | null,
    monthly?: string | null,
    mono?: string | null,
    rental?: string | null,
    actressID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateListURLMutationVariables = {
  input: UpdateListURLInput,
  condition?: ModelListURLConditionInput | null,
};

export type UpdateListURLMutation = {
  updateListURL?:  {
    __typename: "ListURL",
    id: string,
    digital?: string | null,
    monthly?: string | null,
    mono?: string | null,
    rental?: string | null,
    actressID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteListURLMutationVariables = {
  input: DeleteListURLInput,
  condition?: ModelListURLConditionInput | null,
};

export type DeleteListURLMutation = {
  deleteListURL?:  {
    __typename: "ListURL",
    id: string,
    digital?: string | null,
    monthly?: string | null,
    mono?: string | null,
    rental?: string | null,
    actressID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncActressesQueryVariables = {
  filter?: ModelActressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncActressesQuery = {
  syncActresses?:  {
    __typename: "ModelActressConnection",
    items?:  Array< {
      __typename: "Actress",
      id: string,
      name?: string | null,
      ruby?: string | null,
      bust?: string | null,
      cup?: string | null,
      waist?: string | null,
      hip?: string | null,
      height?: string | null,
      birthday?: string | null,
      blood_type?: string | null,
      hobby?: string | null,
      prefectures?: string | null,
      imageURL?:  {
        __typename: "ImageURL",
        id: string,
        small?: string | null,
        large?: string | null,
        actressID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      listURL?:  {
        __typename: "ListURL",
        id: string,
        digital?: string | null,
        monthly?: string | null,
        mono?: string | null,
        rental?: string | null,
        actressID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetActressQueryVariables = {
  id: string,
};

export type GetActressQuery = {
  getActress?:  {
    __typename: "Actress",
    id: string,
    name?: string | null,
    ruby?: string | null,
    bust?: string | null,
    cup?: string | null,
    waist?: string | null,
    hip?: string | null,
    height?: string | null,
    birthday?: string | null,
    blood_type?: string | null,
    hobby?: string | null,
    prefectures?: string | null,
    imageURL?:  {
      __typename: "ImageURL",
      id: string,
      small?: string | null,
      large?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    listURL?:  {
      __typename: "ListURL",
      id: string,
      digital?: string | null,
      monthly?: string | null,
      mono?: string | null,
      rental?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListActressesQueryVariables = {
  filter?: ModelActressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActressesQuery = {
  listActresses?:  {
    __typename: "ModelActressConnection",
    items?:  Array< {
      __typename: "Actress",
      id: string,
      name?: string | null,
      ruby?: string | null,
      bust?: string | null,
      cup?: string | null,
      waist?: string | null,
      hip?: string | null,
      height?: string | null,
      birthday?: string | null,
      blood_type?: string | null,
      hobby?: string | null,
      prefectures?: string | null,
      imageURL?:  {
        __typename: "ImageURL",
        id: string,
        small?: string | null,
        large?: string | null,
        actressID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      listURL?:  {
        __typename: "ListURL",
        id: string,
        digital?: string | null,
        monthly?: string | null,
        mono?: string | null,
        rental?: string | null,
        actressID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncImageURLSQueryVariables = {
  filter?: ModelImageURLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncImageURLSQuery = {
  syncImageURLS?:  {
    __typename: "ModelImageURLConnection",
    items?:  Array< {
      __typename: "ImageURL",
      id: string,
      small?: string | null,
      large?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetImageURLQueryVariables = {
  id: string,
};

export type GetImageURLQuery = {
  getImageURL?:  {
    __typename: "ImageURL",
    id: string,
    small?: string | null,
    large?: string | null,
    actressID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListImageURLSQueryVariables = {
  filter?: ModelImageURLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImageURLSQuery = {
  listImageURLS?:  {
    __typename: "ModelImageURLConnection",
    items?:  Array< {
      __typename: "ImageURL",
      id: string,
      small?: string | null,
      large?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncListURLSQueryVariables = {
  filter?: ModelListURLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncListURLSQuery = {
  syncListURLS?:  {
    __typename: "ModelListURLConnection",
    items?:  Array< {
      __typename: "ListURL",
      id: string,
      digital?: string | null,
      monthly?: string | null,
      mono?: string | null,
      rental?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetListURLQueryVariables = {
  id: string,
};

export type GetListURLQuery = {
  getListURL?:  {
    __typename: "ListURL",
    id: string,
    digital?: string | null,
    monthly?: string | null,
    mono?: string | null,
    rental?: string | null,
    actressID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListListURLSQueryVariables = {
  filter?: ModelListURLFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListURLSQuery = {
  listListURLS?:  {
    __typename: "ModelListURLConnection",
    items?:  Array< {
      __typename: "ListURL",
      id: string,
      digital?: string | null,
      monthly?: string | null,
      mono?: string | null,
      rental?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateActressSubscription = {
  onCreateActress?:  {
    __typename: "Actress",
    id: string,
    name?: string | null,
    ruby?: string | null,
    bust?: string | null,
    cup?: string | null,
    waist?: string | null,
    hip?: string | null,
    height?: string | null,
    birthday?: string | null,
    blood_type?: string | null,
    hobby?: string | null,
    prefectures?: string | null,
    imageURL?:  {
      __typename: "ImageURL",
      id: string,
      small?: string | null,
      large?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    listURL?:  {
      __typename: "ListURL",
      id: string,
      digital?: string | null,
      monthly?: string | null,
      mono?: string | null,
      rental?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateActressSubscription = {
  onUpdateActress?:  {
    __typename: "Actress",
    id: string,
    name?: string | null,
    ruby?: string | null,
    bust?: string | null,
    cup?: string | null,
    waist?: string | null,
    hip?: string | null,
    height?: string | null,
    birthday?: string | null,
    blood_type?: string | null,
    hobby?: string | null,
    prefectures?: string | null,
    imageURL?:  {
      __typename: "ImageURL",
      id: string,
      small?: string | null,
      large?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    listURL?:  {
      __typename: "ListURL",
      id: string,
      digital?: string | null,
      monthly?: string | null,
      mono?: string | null,
      rental?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteActressSubscription = {
  onDeleteActress?:  {
    __typename: "Actress",
    id: string,
    name?: string | null,
    ruby?: string | null,
    bust?: string | null,
    cup?: string | null,
    waist?: string | null,
    hip?: string | null,
    height?: string | null,
    birthday?: string | null,
    blood_type?: string | null,
    hobby?: string | null,
    prefectures?: string | null,
    imageURL?:  {
      __typename: "ImageURL",
      id: string,
      small?: string | null,
      large?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    listURL?:  {
      __typename: "ListURL",
      id: string,
      digital?: string | null,
      monthly?: string | null,
      mono?: string | null,
      rental?: string | null,
      actressID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateImageURLSubscription = {
  onCreateImageURL?:  {
    __typename: "ImageURL",
    id: string,
    small?: string | null,
    large?: string | null,
    actressID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateImageURLSubscription = {
  onUpdateImageURL?:  {
    __typename: "ImageURL",
    id: string,
    small?: string | null,
    large?: string | null,
    actressID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteImageURLSubscription = {
  onDeleteImageURL?:  {
    __typename: "ImageURL",
    id: string,
    small?: string | null,
    large?: string | null,
    actressID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateListURLSubscription = {
  onCreateListURL?:  {
    __typename: "ListURL",
    id: string,
    digital?: string | null,
    monthly?: string | null,
    mono?: string | null,
    rental?: string | null,
    actressID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateListURLSubscription = {
  onUpdateListURL?:  {
    __typename: "ListURL",
    id: string,
    digital?: string | null,
    monthly?: string | null,
    mono?: string | null,
    rental?: string | null,
    actressID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteListURLSubscription = {
  onDeleteListURL?:  {
    __typename: "ListURL",
    id: string,
    digital?: string | null,
    monthly?: string | null,
    mono?: string | null,
    rental?: string | null,
    actressID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
