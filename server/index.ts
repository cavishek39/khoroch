import {Account, Client, Databases, ID, Models, Query} from 'appwrite';
import {
  APP_WRITE_ENDPOINT,
  APP_WRITE_PROJECT,
  COLLECTION_ID,
  DATABASE_ID,
} from '../creds';
import {transformData} from '../src/utils/helpers';

const client = new Client();

client.setEndpoint(APP_WRITE_ENDPOINT).setProject(APP_WRITE_PROJECT);

const account = new Account(client);

const databases = new Databases(client);

async function createDocument(
  data: Omit<Models.Document, keyof Models.Document>,
) {
  const response = await databases.createDocument(
    DATABASE_ID,
    COLLECTION_ID,
    ID.unique(),
    data,
  );
  return response;
}

async function getDocument() {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);

    const transformedData = transformData(response);

    return transformedData ?? [];
  } catch (err) {
    console.log(err);
  }
}

export {client, account, createDocument, getDocument};
