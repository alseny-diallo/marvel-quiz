import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc } from 'firebase/firestore';
import configs from '../../config/base';

const config = {
  apiKey: configs.api_key,

  authDomain: configs.auth_domain,

  projectId: configs.project_id,

  storageBucket: configs.storage_bucket,

  messagingSenderId: configs.messaging_sender_id,

  appId: configs.app_id,
};
const FirebaseApp = initializeApp(config);
const auth = getAuth(FirebaseApp);
export default auth;
export const db = getFirestore();
export const user = (uid) => doc(db, `users/${uid}`);
