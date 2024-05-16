import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div>
    <GlobalStyle />
    <App />
  </div>
);
