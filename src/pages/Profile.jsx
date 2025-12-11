import React, { useState, useEffect } from "react";
import ProfileView from "../components/profile/ProfileView";
import EditScreen from "../components/profile/EditScreen";

const STORAGE_KEY = "chaskys-user";

export const Profile = () => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Error leyendo usuario:", e);
    }

    // Si no hay usuario, retorna vacío (el login lo llenará)
    return {
      username: "",
      fullName: "",
      phone: "",
      email: "",
      password: "",
    };
  });

  const [editing, setEditing] = useState(false);
  const [tempUser, setTempUser] = useState(user);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } catch (e) {
      console.error("Error guardando usuario:", e);
    }
  }, [user]);
  const handleEdit = () => {
    setTempUser(user); // Copia del usuario actual
    setEditing(true);
  };

  const handleChange = (field, value) => {
    setTempUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setUser(tempUser); // guardar permanentes
  };

  const handleCancel = () => {
    setTempUser(user); // volver al original
    setEditing(false);
  };

  return (
    <>
      {editing ? (
        <EditScreen
          user={tempUser}
          onChange={handleChange}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <ProfileView user={user} onEdit={handleEdit} />
      )}
    </>
  );
};

export default Profile;
