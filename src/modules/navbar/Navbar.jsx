import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={css.menu}>
      <li key="1">
        <NavLink to="/">Shop</NavLink>
      </li>
      <li key="2">
        <NavLink to="/cart">Shopping Cart</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
