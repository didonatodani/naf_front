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
        <small className="footer-span">NAF © 2025</small>
      </div>
      <div className="footer-link-div">
        <Link to={"/contact"} className="footer-link">
          Message us
        </Link>
        <a href="tel:+34695771431" className="footer-link">+34695771431</a>
        <a href="mailto:info@naf-group.com" className="footer-link">info@naf-group.com</a>
      </div>
    </footer>
  );
}

export default Footer;
