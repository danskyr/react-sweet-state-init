import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { defaults } from "react-sweet-state";
import App from "./ui";

const rootElement = document.getElementById("root");
defaults.devtools = true;

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
