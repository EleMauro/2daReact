import "./css/Navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
  <nav className="navbar">
  <div className="nav-links">
    <Link className="nav-link" to="/">Venta de Vehículos</Link>
    <Link className="nav-link" to="/category/usados">Usados</Link>
    <Link className="nav-link" to="/category/0km">0km</Link>
    <Link className="nav-link" to="/category/mas-vendidos">Más vendidos</Link>
  </div>

  <div className="nav-right">
    <img className="nav-logo" src={logo} alt="Logo OKM Autos" />
    <CartWidget />
  </div>
</nav>

  );
};

export default Navbar;


