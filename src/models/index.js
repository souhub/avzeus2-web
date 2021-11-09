// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Actress, ImageURL, ListURL } = initSchema(schema);

export {
  Actress,
  ImageURL,
  ListURL
};