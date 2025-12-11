import { NavLink, useLocation } from "react-router-dom";
import "./navigationbar.css";
import homeIcon from "../../assets/icons/home.png";
import ordersIcon from "../../assets/icons/orders.png";
import profileIcon from "../../assets/icons/profile.png";

export default function NavigationBar() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const hiddenRoutes = ["/", "/login", "/register"];
  if (hiddenRoutes.includes(path)) return null;

  const tabs = [
    { id: "home", path: "/home", icon: homeIcon, label: "Inicio" },
    { id: "orders", path: "/pedidos", icon: ordersIcon, label: "Pedidos" },
    { id: "profile", path: "/profile", icon: profileIcon, label: "Perfil" },
  ];

  const orderRoutes = ["/pedidos", "/confirm-order", "/monitoring-order"];

  return (
    <nav className="navbar">
      {tabs.map((tab) => {
        const isOrdersActive =
          tab.id === "orders" &&
          orderRoutes.some((r) => path.startsWith(r));

        return (
          <NavLink key={tab.id} to={tab.path} end>
            {({ isActive }) => (
              <div
                className={`nav-item ${tab.id} ${
                  isActive || isOrdersActive ? "active" : ""
                }`}
              >
                <img src={tab.icon} alt={tab.label} />
              </div>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
