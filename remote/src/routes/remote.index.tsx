import { Link } from "react-router-dom";

export function Component() {
  return (
    <div>
      <h1>Remote</h1>
      <p>Remote app mounted from localhost:3001</p>
      <Link to="nested-remote-link">Nested Route in remote app</Link>
    </div>
  );
}
