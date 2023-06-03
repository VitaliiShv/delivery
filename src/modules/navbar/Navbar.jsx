import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={styles.menu}>
      <li key="1">
        <NavLink className={styles.link} to="/">
          Shop
        </NavLink>
      </li>

      <li key="2">
        <NavLink className={styles.link} to="/cart">
          Shopping Cart
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
