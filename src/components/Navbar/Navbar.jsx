import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"
import "./Navbar.css"

function Navbar() {
  return (
    <header>
      <Link to={"/"}>
        <img src={Logo} alt="NAF logo" id="navbar-logo"/>
      </Link>
      <nav>
        <Link to={"/about"}>About Us</Link>
        <Link to={"/construction"}>Construction</Link>
        <Link to={"/bim"}>BIM</Link>
        <Link to={"/woodframe"}>Wood Frame</Link>
        <Link to={"/contact"}>Contact Us</Link>
      </nav>
    </header>
  );
}

export default Navbar;
