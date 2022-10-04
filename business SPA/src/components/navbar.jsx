import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";

function Navbar() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <p className={classes.logo}>
            <Link to="/">
              {/* <img
                alt="Brand icon by Icon8"
                width="15"
                height="15"
                src="https://img.icons8.com/external-obvious-flat-kerismaker/96/000000/external-brand-seo-flat-obvious-flat-kerismaker.png"
              /> */}
              <span>Mockup</span>
            </Link>
          </p>
          <li>
            <NavLink activeClassName={classes.active} to="/more-info">
              WHAT
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/about-us">
              WHO
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/contact-us">
              WHERE
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
