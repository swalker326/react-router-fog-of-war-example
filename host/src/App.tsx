import { Link } from "react-router-dom";
import "./App.css";
import React from "react";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <Link to="/remote">Go to remote</Link>

      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
