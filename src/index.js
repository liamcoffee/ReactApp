// Import the React and ReactDOM libraaries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component

const App = () => {
  return <div> Hello World!</div>;
};

// Take the react component and display it

ReactDOM.render(<App />, document.querySelector("#root"));
