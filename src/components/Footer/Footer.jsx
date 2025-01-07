import { Link } from "react-router-dom";
import Logo from "../../assets/logo-noback.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-rights-div">
        <Link to={"/"}>
          <img src={Logo} alt="NAF logo" id="footer-logo" />
        </Link>
        <small>NAF © 2025</small>
      </div>
      <div className="footer-link-div">
        <Link to={"/contact"} className="footer-btn">
          Contact Us
        </Link>
        {/* click and copy or click and call/email */}
        <small>email@email</small>
        <small>+23423435345</small>
      </div>
    </footer>
  );
}

export default Footer;
