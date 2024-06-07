import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="content">
      <Link to="/">Home</Link>
      <h1>Remote App</h1>
      <p>Remote App is running!</p>
    </div>
  );
};

export default App;
