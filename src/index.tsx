
import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./Components/App";
import './index.less';
ReactDOMClient.hydrateRoot(document.getElementById("root"), <App />);
