import React from "react";
import { createRoot } from "react-dom/client"
import { MoralisProvider } from "react-moralis";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";

import { persistStore } from "redux-persist";

let persistor = persistStore(store);

// Axios
axios.defaults.baseURL = process.env.REACT_APP_API_HOST;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Credentials'] = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})

// Axios

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MoralisProvider
        appId={process.env.REACT_APP_MORALIS_APPID}
        serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
      >
        <App />
      </MoralisProvider>
    </PersistGate>
  </Provider>
);

reportWebVitals();