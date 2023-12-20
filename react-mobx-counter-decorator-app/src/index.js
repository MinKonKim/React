import React from "react";
import { render } from "react-dom";
import App from "./App";
import counterStore from "./counterStore";
import { CounterProvider } from "./context/counterContext";

const store = new counterStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
render(
  <React.StrictMode>
    <CounterProvider value={store}>
      <App />
    </CounterProvider>
  </React.StrictMode>
);
