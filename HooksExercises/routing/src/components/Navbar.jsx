import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav style={{ padding: 10, background: "#f1f1f1", display: "flex", gap: 20 }}>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Trang Chủ
      </NavLink>

      <NavLink to="/san-pham" className={({ isActive }) => (isActive ? "active" : "")}>
        Sản phẩm
      </NavLink>

      <NavLink to="/lien-he" className={({ isActive }) => (isActive ? "active" : "")}>
        Liên hệ
      </NavLink>
    </nav>
  );
};

export default Navbar;
