import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { HeaderHome } from "../components/home/Header";

import "../styles/Historial.css";

export const Historial = () => {
  const navigate = useNavigate(); 
  const [history, setHistory] = useState([]);

  return (
    <div className="historial-screen">
      <HeaderHome />

      <div className="historial-back" onClick={() => navigate("/Pedidos")}>
        <span>&lt;</span>
      </div>

      <div className="profit-home">
        <p className="profit-home-title">Ganancia Semanal</p>
        <p className="profit-home-summary">S/ {(152.20).toFixed(2)}</p>
      </div>

      <div className="record-view-history">
        <div className="available-box">
          <p>Pedidos Disponibles: 5</p>
        </div>
      </div>
      <div className="historial-container">
        <p className="historial-title">HISTORIAL DE PEDIDOS</p>

        {history.length === 0 ? (
          <p className="empty-history">No tienes pedidos realizados</p>
        ) : (
          <div className="historial-list">
            {history.map((order, index) => (
              <div key={index} className="historial-card">
                <div className="historial-card-left">
                  <h3>{order.name}</h3>
                  <p>{order.address}</p>
                </div>

                <div className="historial-card-right">
                  <h3>S/ {order.amount}</h3>
                  <p>Distancia: {order.distance}</p>
                  <p>{order.date} {order.time}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
