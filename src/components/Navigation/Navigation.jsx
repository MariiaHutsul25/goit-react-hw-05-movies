import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Novigation = () => (
  <nav>
    <NavLink to="/" className={s.link} activeClassName={s.active__link} exact>
      Home
    </NavLink>
    <NavLink to="/movies" className={s.link} activeClassName={s.active__link}>
      Movies
    </NavLink>
  </nav>
);
export default Novigation;
