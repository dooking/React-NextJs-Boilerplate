import firebase from './initFirebase';
import { getAuth, signInWithCustomToken } from 'firebase/auth';
import {
  getDatabase,
  ref,
  set,
  push,
  remove,
  get,
  child,
  serverTimestamp,
  update,
} from 'firebase/database';

export const getFirebaseData = async (uri: string) => {
  const dbRef = ref(getDatabase(firebase));
  const data = await get(child(dbRef, uri));
  if (data.exists()) {
    return data.val();
  }
  return;
};
export const saveFirebaseData = async (url: string, params: any) => {
  const db = await getDatabase(firebase);
  await set(ref(db, url), params);
  return;
};

export const updateFirebaseData = async (url: string, params: any) => {
  const db = await getDatabase(firebase);
  await update(ref(db, url), { ...params, updated_at: serverTimestamp() });
  return;
};

export const addFirebaseData = async (url: string, params: any) => {
  const db = await getDatabase(firebase);
  const currentRef = await ref(db, url);
  const newRef = await push(currentRef);
  await set(newRef, params);
  return;
};

export const deleteFirebaseData = async (url: string) => {
  const db = await getDatabase(firebase);
  await remove(ref(db, url));
};
