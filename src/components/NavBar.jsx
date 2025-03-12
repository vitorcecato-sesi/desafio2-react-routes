import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="blocoNav">
      <Link className="fonte" id="link" to="/"> Home 🏡 </Link>

      <Link className="fonte" id="link" to="/interlakqn-suica"> Page 1 🛫 </Link>

      <Link className="fonte" id="link" to="/paris-franca"> Page 2 🛬 </Link>

      <Link className="fonte" id="link" to="/disney-eua"> Page 3 🛫 </Link>

      <Link className="fonte" id="link" to="/newyork-eua"> Page 4 🛬 </Link>
    </nav>
  );
}
export default Navbar;
