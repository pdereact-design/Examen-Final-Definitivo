import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderHome } from "../home/Header";
import "../../styles/ProfileView.css";  



const ProfileView = ({ user, onEdit }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="profile-screen">
      <HeaderHome /> 

      <div className="avatar-wrapper">
        <div className="avatar-circle">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" fill="#000000ff" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" fill="#000000ff" />
          </svg>
        </div>
        <p className="avatar-username">{user.username}</p>
      </div>

      <div className="form">
        <label className="label">Nombre Completo</label>
        <div className="input read-only">{user.fullName}</div>

        <label className="label">Teléfono</label>
        <div className="input read-only">{user.phone}</div>

        <label className="label">Correo</label>
        <div className="input read-only">{user.email}</div>
      </div>

      <div className="actions">
        <button className="btn btn-edit" onClick={onEdit}>
          Editar
        </button>

        <button className="btn btn-logout" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default ProfileView;
