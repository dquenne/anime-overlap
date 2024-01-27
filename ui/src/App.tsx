import { useState } from "react";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Birthday } from "./Birthday";
import { Staff } from "./Staff";

const client = new Client({
  url: "https://graphql.anilist.co",
  exchanges: [cacheExchange, fetchExchange],
});

function App() {
  const [staffId, setStaffId] = useState<string>("");
  const [tempStaffId, setTempStaffId] = useState<string>("");

  return (
    <>
      <Provider value={client}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div>
          <Staff staffId={staffId} />
        </div>
        <div className="card">
          <input
            type="number"
            onChange={(event) => setTempStaffId(event.target.value)}
          />
          <button onClick={() => setStaffId(tempStaffId)}>Update</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Provider>
    </>
  );
}

export default App;
