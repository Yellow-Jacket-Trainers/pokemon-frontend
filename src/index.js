import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from "./App";
// import Header from "./Header";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    authorizationParams={{
      redirect_uri: process.env.REACT_APP_REDIRECT_URI
    }}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>
);