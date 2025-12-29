import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f2f2f2" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/posts" style={{ marginRight: "15px" }}>Posts</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}

export default Navbar;
