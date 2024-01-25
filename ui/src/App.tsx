import React from "react";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import logo from "./logo.svg";
import "./App.css";

import { Birthday } from "./Birthday";

const client = new Client({
  url: "https://graphql.anilist.co",
  exchanges: [cacheExchange, fetchExchange],
});

function App() {
  return (
    <Provider value={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Birthday />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
