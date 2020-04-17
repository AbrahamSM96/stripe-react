import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
// cambiar a materialize min en produccion
import "../node_modules/materialize-css/dist/css/materialize.css";
import "../node_modules/materialize-css/dist/js/materialize";
import "./styles/GlobalStyles.css";

ReactDOM.render(<App />, document.getElementById("app"));
