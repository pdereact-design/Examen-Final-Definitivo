import React from "react";
import "../../styles/AlertRegister.css";

export const AlertRegister = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <p>{message}</p>
        <div className="alert-buttons">
          <button className="btn-cancel" onClick={onCancel}>
            Cancelar
          </button>
          <button className="btn-accept" onClick={onConfirm}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
