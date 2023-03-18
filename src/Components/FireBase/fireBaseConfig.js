import { initializeApp } from 'firebase/app';
import configs from '../../config/base';

const config = {
  apiKey: configs.api_key,

  authDomain: configs.auth_domain,

  projectId: configs.project_id,

  storageBucket: configs.storage_bucket,

  messagingSenderId: configs.messaging_sender_id,

  appId: configs.app_id,
};
const app = initializeApp(config);
export default app;
