import { Link } from "react-router-dom";

export default function IndexRoute() {
  return (
    <div>
      <h1>Remote</h1>
      <p>Remote app mounted from localhost:3001</p>
      <Link to="nested-remote-link">Nested Route in remote app</Link>
    </div>
  );
}
