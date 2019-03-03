import { storage } from '@/connectDb';

export const uploadFile = ({ name, file }) => storage.child(name).put(file).then(resp => resp);

export const getDownloadURL = fullpath => storage.child(fullpath).getDownloadURL();

export const deleteFile = fullpath => storage.child(fullpath).delete();

export default {};
