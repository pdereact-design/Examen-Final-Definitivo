import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoChaskys } from "../components/LogoChaskys";
import "../styles/Olvidastescontraseña.css";

export const Olvidastescontraseña = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [codigo, setCodigo] = useState("");
  const [codigoGenerado, setCodigoGenerado] = useState("");
  const [timer, setTimer] = useState(60);

  // Buscar usuario por teléfono o correo
  const buscarUsuario = () => {
    const storedUser = JSON.parse(localStorage.getItem("chaskys-user"));
    if (!storedUser) return null;

    if (storedUser.phone === phone) return storedUser;
    if (storedUser.email === email) return storedUser;

    return null;
  };

  // Validación teléfono Perú
  const validarTelefonoPeru = (num) => /^[0-9]{9}$/.test(num);

  // Validación correo
  const validarCorreo = (correo) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

  // Temporizador del código
  useEffect(() => {
    if (!codigoEnviado || timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [codigoEnviado, timer]);

  // Enviar código
  const enviarCodigo = () => {
    if (phone === "" && email === "") {
      alert("Ingresa teléfono o correo.");
      return;
    }

    const usuarioEncontrado = buscarUsuario();

    if (!usuarioEncontrado) {
      alert("No existe ningún usuario con esos datos");
      return;
    }

    // Guardar usuario para cambiar contraseña
    localStorage.setItem("usuario-para-cambiar", JSON.stringify(usuarioEncontrado));

    if (phone !== "" && !validarTelefonoPeru(phone)) {
      alert("Ingresa un número peruano válido (9 dígitos).");
      return;
    }

    if (email !== "" && !validarCorreo(email)) {
      alert("Ingresa un correo válido.");
      return;
    }

    // Generar código de 6 dígitos
    const codigoGeneradoNuevo = Math.floor(100000 + Math.random() * 900000).toString();
    setCodigoGenerado(codigoGeneradoNuevo);

    setCodigoEnviado(true);
    setTimer(60);

    alert("Código enviado correctamente (Test: " + codigoGeneradoNuevo + ")");
  };

  // Verificar código
  const verificarCodigo = () => {
    if (codigo.trim() === "") {
      alert("Ingresa el código.");
      return;
    }

    if (codigo !== codigoGenerado) {
      alert("Código incorrecto.");
      return;
    }

    alert("Código verificado correctamente");
    navigate("/VerificarContraseñá");
  };

  return (
    <>
      <LogoChaskys descripcion={"Delivery app"} />

      <section className="accion-register1 p-0 mt-1">
        <div className="form-body1 p-0 m-3 mt-1">
          <p className="text-center color-black2 fs-242 itim-regular2 mb-0 mb-2">
            ¿Olvidaste tu contraseña?
          </p>

          {/* Teléfono */}
          <input
            className="form1"
            type="text"
            placeholder="Teléfono (Perú)"
            value={phone}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, "");

              if (value.length === 1 && value !== "9") return;

              if (value.length > 9) value = value.slice(0, 9);

              setPhone(value);

              if (value !== "") setEmail("");
            }}
            maxLength={9}
          />

          <p className="text-center my-2">o</p>

          {/* Correo */}
          <input
            className="form1"
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value !== "") setPhone("");
            }}
          />

          {/* Botón enviar */}
          <button
            className="btn-center2 color-white2 bck-vrd2 btn2 ms-2 mt-3"
            onClick={enviarCodigo}
          >
            Enviar
          </button>

          {/* Código enviado */}
          {codigoEnviado && (
            <>
              <p className="text-center color-black2 fs-242 itim-regular2 my-2">
                Te enviamos un código: <strong>{timer}s</strong>
              </p>

              <input
                className="form1"
                type="password"
                placeholder="Código"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                maxLength={6}
              />

              <button
                className="btn-center2 color-white2 bck-vrd2 btn2 ms-2 mt-4"
                onClick={verificarCodigo}
              >
                Verificar
              </button>

              <p
                className="text-center mt-2 color-black2"
                style={{ opacity: 0.6 }}
              >
                Código generado (test): <strong>{codigoGenerado}</strong>
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
};
