import {Account, Client} from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64833d403f70cb3d74b7');

const account = new Account(client);

export {client, account};
