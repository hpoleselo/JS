import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./style.css";

// Rendering our App component, which is our "main" located on the /src/components directory called App.js, hence the path ./components/App when importing it
// Our main will refer to the index.html, and we retrieve the id tag called root in index.html
// Realize as well that we call the React element App here, so basically we're importing our whole application
ReactDOM.render(
  <App/>, 
  document.getElementById("root")
);