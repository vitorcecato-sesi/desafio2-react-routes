import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="blocoNav">
      <Link className="fonte" id="link" to="/"> Home 🏡 </Link>

      <Link className="fonte" id="link" to="/interlakqn-suica"> Suiça 🛫 </Link>

      <Link className="fonte" id="link" to="/paris-franca"> França 🛬 </Link>

      <Link className="fonte" id="link" to="/disney-eua"> Disney 🛫 </Link>

      <Link className="fonte" id="link" to="/newyork-eua"> New York 🛬 </Link>
    </nav>
  );
}
export default Navbar;
