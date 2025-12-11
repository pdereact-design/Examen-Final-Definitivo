import { LogoChaskys } from "../components/LogoChaskys";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AlertRegister } from "../components/alerts/AlertRegister";
import "../styles/Register.css";

export const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    user: "",
    pass: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleRegister = (e) => {
  e.preventDefault();

  if (
    !form.name.trim() ||
    !form.phone.trim() ||
    !form.email.trim() ||
    !form.user.trim() ||
    !form.pass.trim()
  ) {
    setAlertMessage("Por favor completa todos los campos antes de continuar.");
    setShowAlert(true);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    setAlertMessage("Por favor ingresa un correo válido.");
    setShowAlert(true);
    return;
  }

  // Teléfono peruano debe tener 9 dígitos y empezar con 9
  const phoneRegex = /^9[0-9]{8}$/;
  if (!phoneRegex.test(form.phone)) {
    setAlertMessage("El teléfono debe empezar con 9 y tener 9 dígitos.");
    setShowAlert(true);
    return;
  }

  if (form.pass.length < 4) {
    setAlertMessage("La contraseña debe tener al menos 4 caracteres.");
    setShowAlert(true);
    return;
  }

  const storedUsers = JSON.parse(localStorage.getItem("chaskysUsers")) || [];
  const userExists = storedUsers.some(
    (u) => u.user === form.user || u.email === form.email
  );

  if (userExists) {
    setAlertMessage("Ya existe una cuenta con ese usuario o correo.");
    setShowAlert(true);
    return;
  }

  // --- Guardar usuario en la lista general ---
  const updatedUsers = [...storedUsers, form];
  localStorage.setItem("chaskysUsers", JSON.stringify(updatedUsers));

  // --- Guardar usuario como usuario actual ---
  localStorage.setItem("chaskys-user", JSON.stringify({
    username: form.user,
    fullName: form.name,
    phone: form.phone,
    email: form.email,
    password: form.pass,
  }));

  setAlertMessage("Cuenta creada con éxito");
  setShowAlert(true);
};


  const handleAccept = () => {
    setShowAlert(false);
    if (alertMessage.includes("éxito")) {
      navigate("/login");
    }
  };

  const handleCancel = () => {
    setShowAlert(false);
  };

  return (
    <>
      <LogoChaskys descripcion={"Registro Delivery app"} />
      <section id="form">
        <form onSubmit={handleRegister}>
          <div className="form-body">
            <input
              type="text"
              placeholder="Nombre Completo"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Teléfono"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              type="email"
              placeholder="Correo"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Usuario"
              value={form.user}
              onChange={(e) => setForm({ ...form, user: e.target.value })}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={form.pass}
              onChange={(e) => setForm({ ...form, pass: e.target.value })}
            />
          </div>

          <div className="accion-register">
            <button type="submit" className="btn2 bck-vrd2 text-white">
              Crear cuenta
            </button>
            <Link to="/login" className="btn2 btn-create-account">
              Iniciar Sesión
            </Link>
          </div>
        </form>
      </section>

      {showAlert && (
        <AlertRegister
          message={alertMessage}
          onConfirm={handleAccept}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};
