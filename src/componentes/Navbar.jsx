import "./css/Navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        {/* HOME */}
        <Link className="nav-link" to="/">
          Venta de Vehículos 0km
        </Link>

        {/* CATEGORÍAS */}
        <Link className="nav-link" to="/category/sedan">
          Los más vistos
        </Link>
        <Link className="nav-link" to="/category/hatchback">
          Elegí tu plan
        </Link>
        <Link className="nav-link" to="/category/pickup">
          Más vendidos
        </Link>
      </div>

      <div className="nav-right">
        <img
          className="nav-logo"
          src="/logo.png"
          alt="Logo 0KM Autos"
        />
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;



