import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container" style={{ backgroundColor: "blue" }}>
        <div>
          <h3>About</h3>
        </div>
        <div>
          <Link to="/reviews">History</Link>
        </div>
        <div>
          <Link to="/reviews">Careers</Link>
        </div>
        <div>
          <h3>Discover</h3>
        </div>
        <div>
          <Link to="/reviews">Events</Link>
        </div>
        <div>
          <Link to="/reviews">Support</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;

//Line 21 nad 24 will got to /events and /support.
