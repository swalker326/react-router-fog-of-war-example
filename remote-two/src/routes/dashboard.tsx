import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Remote app mounted from localhost:3002</p>
      <Link to="nested-remote-link">Nested Route in remote app</Link>
    </div>
  );
}
