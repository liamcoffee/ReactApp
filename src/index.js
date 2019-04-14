// Import the React and ReactDOM libraaries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component

const buttonText = "click me!";

const App = () => {
  return (
    <div>
      <label htmlFor="name" className="label">
        Enter Name:
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "red", color: "#fff" }}>
        {buttonText}
      </button>
    </div>
  );
};

// Take the react component and display it

ReactDOM.render(<App />, document.querySelector("#root"));
