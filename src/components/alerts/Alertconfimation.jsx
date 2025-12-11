import React from "react";
import "../../styles/Alertconfimation.css";

export const AlertRegister = ({ visible, text, type, onCancel, onAccept }) => {
  if (!visible) return null;

  return (
    <div className="alert-overlay">
      <div className="alert-card">
        
        {type === "confirm" && (
          <>
            <p className="alert-text">{text}</p>

            <div className="alert-actions">
              <button className="alert-btn-cancel" onClick={onCancel}>
                Cancelar
              </button>

              <button className="alert-btn-accept" onClick={onAccept}>
                Aceptar
              </button>
            </div>
          </>
        )}

        {type === "success" && (
          <p className="alert-text">Guardado<br/>Exitosamente</p>
        )}

      </div>
    </div>
  );
};
