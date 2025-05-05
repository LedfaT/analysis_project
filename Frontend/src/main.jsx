import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./app.css";

import Store from "./store/store.js";

const store = new Store();

export const context = createContext({
  store,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <context.Provider value={{ store }}>
      <App />
    </context.Provider>
  </StrictMode>
);
