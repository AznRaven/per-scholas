import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home Page</div>
      </Link>
      <Link to="/about">
        <div>About Page</div>
      </Link>
      <Link to="/stocks">
        <div>Dashboard</div>
      </Link>
      {/* <Link to="/stocks/:symbol">
        <div>Stock</div>
      </Link> */}
    </div>
  );
}

