import React from "react";
import "../../styles/Alertconfirmarpedido.css";

const Alertconfirmarpedido = ({ message, onConfirm, onCancel }) => {
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

export default Alertconfirmarpedido;
