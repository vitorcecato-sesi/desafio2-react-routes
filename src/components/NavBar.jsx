import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="blocoNav">
      <Link className="fonte" id="link" to="/"> Home 🏡 </Link>

      <Link className="fonte" id="link" to="/page1"> Page 1 🛫 </Link>

      <Link className="fonte" id="link" to="/page2"> Page 2 🛬 </Link>

      <Link className="fonte" id="link" to="/page3"> Page 3 🛫 </Link>

      <Link className="fonte" id="link" to="/page4"> Page 4 🛬 </Link>
    </nav>
  );
}
export default Navbar;
