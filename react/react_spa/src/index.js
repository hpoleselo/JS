import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";

// Rendering our Main component, which is located on the /src directory called Main.js, hence the path ./ when importing it
// Our main will refer to the index.html, and we retrieve the id tag called root in index.html
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);