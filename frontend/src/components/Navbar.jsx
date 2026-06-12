import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <h1 className="logo">Healix</h1>

        <div className="nav-links">
          <Link to="/login">Login</Link>

          <Link to="/signup">Signup</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;