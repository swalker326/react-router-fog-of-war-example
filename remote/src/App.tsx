import { Link, Outlet, useLoaderData } from "react-router-dom";

const App = () => {
  const data = useLoaderData();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <pre>
        <h3>Loader Data</h3>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
      <Outlet />
    </div>
  );
};

export default App;
