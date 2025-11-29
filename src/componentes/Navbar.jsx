// src/componentes/Navbar.jsx
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./css/Navbar.css";

const Navbar = () => {
  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          Venta de Vehículos
        </Link>
      </div>

      <div className="navbar-center">
        <NavLink to="/category/autos" className={getNavClass}>
          Autos
        </NavLink>

        <NavLink to="/category/pickups" className={getNavClass}>
          Pickups
        </NavLink>

        <NavLink to="/category/usados" className={getNavClass}>
          Usados
        </NavLink>

        <NavLink to="/category/0km" className={getNavClass}>
          0km
        </NavLink>
      </div>

      <div className="navbar-right">
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;

