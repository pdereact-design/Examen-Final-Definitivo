import React, { useState } from "react";
import { HeaderHome } from "../home/Header";
import { AlertRegister } from "../alerts/Alertconfimation";
import "../../styles/EditScreen.css";

const EditScreen = ({ user, onChange, onSave, onCancel }) => {
  const [alert, setAlert] = useState({ visible: false, type: "", text: "", action: "" });

  const handleSaveClick = () => {
    setAlert({
      visible: true,
      type: "confirm",
      text: "¿Deseas guardar los cambios?",
      action: "save",
    });
  };

  const handleSaveAccept = () => {
    onSave();

    setAlert({
      visible: true,
      type: "success",
      text: "Guardado Exitosamente",
      action: "",
    });

    setTimeout(() => setAlert({ visible: false }), 1500);
  };

  const handleCancelClick = () => {
    setAlert({
      visible: true,
      type: "confirm",
      text: "¿Deseas descartar los cambios?",
      action: "discard",
    });
  };

  const handleDiscardAccept = () => {
    onCancel();

    setAlert({
      visible: true,
      type: "success",
      text: "Cambios descartados",
      action: "",
    });

    setTimeout(() => setAlert({ visible: false }), 1500);
  };

  const handleCancelAlert = () => {
    setAlert({ visible: false });
  };

  return (
    <div className="edit-screen">
      <HeaderHome />

      <AlertRegister
        visible={alert.visible}
        text={alert.text}
        type={alert.type}
        onCancel={handleCancelAlert}
        onAccept={
          alert.action === "discard"
            ? handleDiscardAccept
            : handleSaveAccept
        }
      />

      <div className="edit-form-wrapper">
        <button
          onClick={onCancel}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            marginBottom: "15px",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <span style={{ fontSize: "24px", color: "white" }}>⭠</span>
        </button>

        <div className="edit-top">
          <div className="edit-field-inline">
            <label className="edit-inline-label">
              <svg width="18" height="18" fill="#000" viewBox="0 0 24 24" style={{ marginRight: "6px" }}>
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
              </svg>
              Usuario
            </label>

            <input
              className="edit-input-small"
              value={user.username}
              onChange={(e) => onChange("username", e.target.value)}
            />
          </div>

          <div className="edit-field-inline">
            <label className="edit-inline-label">
              <svg width="18" height="18" fill="#000" viewBox="0 0 24 24" style={{ marginRight: "6px" }}>
                <path d="M7 14a5 5 0 1 1 9.6-1.5L22 17v3h-3v-2h-2v-2h-2v-1.5A5 5 0 0 1 7 14z"/>
              </svg>
              Contraseña
            </label>

            <input
              type="text"
              className="edit-input-small"
              value={user.password}
              onChange={(e) => onChange("password", e.target.value)}
            />
          </div>

        </div>

        <div className="edit-form">

          <label className="edit-label">Nombre Completo</label>
          <input
            className="edit-input"
            value={user.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
          />

          <label className="edit-label">Teléfono</label>
          <input
            className="edit-input"
            value={user.phone}
            onChange={(e) => onChange("phone", e.target.value)}
          />

          <label className="edit-label">Correo</label>
          <input
            className="edit-input"
            value={user.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
        </div>

        <div className="edit-actions">
          <button className="btn-save" onClick={handleSaveClick}>
            Guardar
          </button>

          <button className="btn-cancel" onClick={handleCancelClick}>
            Cancelar
          </button>
        </div>

      </div>
    </div>
  );
};

export default EditScreen;
