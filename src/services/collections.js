import { db } from '@/connectDb';

export const getCollections = collection => db.collection(collection).get()
  .then(resp => resp.data());

export const getDocuments = (collection, document) => db.collection(collection).doc(document).get()
  .then(resp => resp.data());

export const setDocuments = (collection, document, data) => db.collection(collection).doc(document).set(data);

export default {};
