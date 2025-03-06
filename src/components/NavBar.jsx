import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="blocoNav">
      <Link className="hoverable" id="link" to="/"> 🏡 <br /> HOME </Link>

      <Link className="hoverable" id="link" to="/page1"> 🛫 <br /> PAGE 1 </Link>

      <Link className="hoverable" id="link" to="/page2"> 🛬 <br /> PAGE 2 </Link>

      <Link className="hoverable" id="link" to="/page3"> 🛫 <br /> PAGE 3 </Link>

      <Link className="hoverable" id="link" to="/page4"> 🛬 <br /> PAGE 4 </Link>
    </nav>
  );
}
export default Navbar;
