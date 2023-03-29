const configs = {
  api_key: import.meta.env.VITE_API_KEY,
  auth_domain: import.meta.env.VITE_AUTH_DOMAIN,
  project_id: import.meta.env.VITE_PROJECT_ID,
  storage_bucket: import.meta.env.VITE_STORAGE_BUCKET,
  messaging_sender_id: import.meta.env.VITE_MESSAGING_SENDER_ID,
  app_id: import.meta.env.VITE_APP_ID,
};

export default configs;
