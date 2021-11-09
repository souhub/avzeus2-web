import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ActressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ImageURLMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ListURLMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Actress {
  readonly id: string;
  readonly name?: string;
  readonly ruby?: string;
  readonly bust?: string;
  readonly cup?: string;
  readonly waist?: string;
  readonly hip?: string;
  readonly height?: string;
  readonly birthday?: string;
  readonly blood_type?: string;
  readonly hobby?: string;
  readonly prefectures?: string;
  readonly imageURL?: ImageURL;
  readonly listURL?: ListURL;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Actress, ActressMetaData>);
  static copyOf(source: Actress, mutator: (draft: MutableModel<Actress, ActressMetaData>) => MutableModel<Actress, ActressMetaData> | void): Actress;
}

export declare class ImageURL {
  readonly id: string;
  readonly small?: string;
  readonly large?: string;
  readonly actressID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ImageURL, ImageURLMetaData>);
  static copyOf(source: ImageURL, mutator: (draft: MutableModel<ImageURL, ImageURLMetaData>) => MutableModel<ImageURL, ImageURLMetaData> | void): ImageURL;
}

export declare class ListURL {
  readonly id: string;
  readonly digital?: string;
  readonly monthly?: string;
  readonly mono?: string;
  readonly rental?: string;
  readonly actressID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ListURL, ListURLMetaData>);
  static copyOf(source: ListURL, mutator: (draft: MutableModel<ListURL, ListURLMetaData>) => MutableModel<ListURL, ListURLMetaData> | void): ListURL;
}