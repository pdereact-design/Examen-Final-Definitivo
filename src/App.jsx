import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// pages
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile.jsx";

import { Pedidos } from "./pages/Pedidos";
import { MonitoringOrder } from "./pages/MonitoringOrder";
import { ConfirmOrder } from "./pages/ConfirmOrder";
import NavigationBar from "./components/shared/navigationbar";
import { Olvidastescontraseña } from "./pages/Olvidastescontraseña";
import { VerificarContraseñá } from "./pages/VerificarContraseñá";

function App() {
  const location = useLocation();

  const hiddenNavRoutes = ["/Olvidastescontraseña", "/VerificarContraseñá"];

  const currentPath = decodeURIComponent(location.pathname);

  const hideNavbar = hiddenNavRoutes.includes(currentPath);

  return (
    <div className="app-container">
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="pedidos" element={<Pedidos />} />
          <Route path="profile" element={<Profile />} />
          <Route path="monitoring-order/:id" element={<MonitoringOrder />} />
          <Route path="confirm-order" element={<ConfirmOrder />} />
          <Route path="/Olvidastescontraseña" element={<Olvidastescontraseña />} />
          <Route path="/VerificarContraseñá" element={<VerificarContraseñá />} />
        </Routes>
      </div>
      {!hideNavbar && <NavigationBar />}
    </div>
  );
}

export default App;
