import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseApp, FirebaseContext } from './Components/Firebase';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
