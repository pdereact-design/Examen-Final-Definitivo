import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoChaskys } from "../components/LogoChaskys";
import "../styles/VerificarContraseñá.css";

export const VerificarContraseñá = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => navigate("/login"), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !password2) {
      alert("Completa ambos campos");
      return;
    }

    if (password !== password2) {
      alert("Las contraseñas no coinciden");
      return;
    }

    setShowConfirm(true);
  };

  return (
    <>
      <LogoChaskys descripcion={"Delivery app"} />

      <section className="accion-register03 p-0 mt-1">
        <div className="form-body1 p-0 m-3 mt-1">
          <form onSubmit={handleSubmit} className="text-center">
            <p className="color-black2 fs-242 itim-regular2 mb-0 m-4">
              Ingresa la nueva contraseña
            </p>

            <input
              className="form2 mt-3 mx-3"
              type="password"
              placeholder="Nueva contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="color-black2 fs-242 itim-regular2 mb-0 m-4">
              Confirmar la nueva contraseña
            </p>

            <input
              className="form2 mt-3 mx-3"
              type="password"
              placeholder="Confirmar contraseña"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />

            <button
              type="submit"
              className="btn-center2 text-white bck-vrd2 btn2 mt-5 mx-auto d-block"
            >
              Verificar
            </button>
          </form>
        </div>
      </section>

      {/* MODAL CONFIRMACIÓN */}
      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal-box">
            <p className="text-center fs-32 py-5">
              ¿Deseas guardar la contraseña?
            </p>

            <div className="d-flex justify-content-around">
              <button
                className="btn2 color-rojobajo"
                onClick={() => setShowConfirm(false)}
              >
                Cancelar
              </button>

              <hr className="mx-4" />

              <button
                className="btn2 color-verdeclaro"
                onClick={() => {
                  const usuarioGuardado = JSON.parse(
                    localStorage.getItem("usuario-para-cambiar")
                  );

                  if (!usuarioGuardado) {
                    alert("Error: No se encontró el usuario.");
                    return;
                  }

                  const usuarioActualizado = {
                    ...usuarioGuardado,
                    password: password,
                  };

                  localStorage.setItem(
                    "chaskys-user",
                    JSON.stringify(usuarioActualizado)
                  );

                  localStorage.removeItem("usuario-para-cambiar");

                  setShowConfirm(false);
                  setShowSuccess(true);
                }}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL ÉXITO */}
      {showSuccess && (
        <div className="modal-overlay">
          <div className="modal-box">
            <p className="text-center fs-36 mt-5 pt-2">
              Guardado exitosamente
            </p>
          </div>
        </div>
      )}
    </>
  );
};
