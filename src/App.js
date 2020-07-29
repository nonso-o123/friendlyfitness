import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/MainComponent";
import ReactPlayer from "react-player";
import { Auth0Provider } from "@auth0/auth0-react"

const auth_domain = process.env.REACT_APP_AUTH0_DOMAIN
const auth_clientId = process.env.REACT_APP_AUTH0_CLIENTID
function App() {
  return (
    <Auth0Provider
      domain={auth_domain}
      clientId={auth_clientId}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
