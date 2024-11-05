import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Guitar Groove</h1>
      <p>where passion meets strings</p>
      <div className="links">
        <Link
          to="/"
          style={{
            // color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "10px",
          }}
        >
          Home
        </Link>
        <Link
          to="/create"
          style={{
            // color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "10px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
