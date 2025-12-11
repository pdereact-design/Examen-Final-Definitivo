import { useState } from "react";
import { LogoChaskys } from "../components/LogoChaskys";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("chaskys-user"));

  if (!storedUser) {
    alert("No hay cuentas registradas");
    return;
  }

  if (user === storedUser.username && password === storedUser.password) {
    navigate("/home");
  } else {
    alert("Usuario o contraseña incorrectos");
  }
};


  return (
    <>
      <LogoChaskys descripcion={"Delivery app"} />

      <form onSubmit={handleSubmit} className="login-form">
        <section className="inputs-form">
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </section>

        <section className="accion-login">
          <Link
            to="/Olvidastescontraseña"
            className="text-dark text-decoration-none fs-5 my-3  "
          >
            ¿Olvidaste tu contraseña?
          </Link>

          <button type="submit" className="btn2 bck-vrd2 text-white ">
            Iniciar Sesión
          </button>

          <span>o</span>

          <Link to="/register" className="btn2 btn-create-account">
            Crea una cuenta
          </Link>
        </section>
      </form>
    </>
  );
};
