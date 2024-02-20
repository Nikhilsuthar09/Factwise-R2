import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <div>
          <img src="https://storage.googleapis.com/coderpad_project_template_assets/coderpad_logo.svg" />
        </div>
        <div>
          <img src="https://storage.googleapis.com/coderpad_project_template_assets/react.svg" />
          <span>React App</span>
        </div>
      </div>
      <div className="content">
        <img src="https://storage.googleapis.com/coderpad_project_template_assets/react.svg" />
        <p>Hello React!</p>
      </div>
      <div className="footer">Use the hell to install new packages.</div>
    </div>
  );
}

export default App;
