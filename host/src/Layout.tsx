import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "100%", width: "10rem" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/remote">Remote</Link>
          </li>
          <li>
            <Link to="/remote-two">Anothe Remote</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

