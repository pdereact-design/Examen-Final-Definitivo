import React, { useState, useEffect } from "react";
import ProfileView from "./ProfileView.jsx";
import EditScreen from "./EditScreen.jsx";
import "./styles.css";


const STORAGE_KEY = "chaskys-user";

const Profile = () => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return initialUser;
  });

  const [tempUser, setTempUser] = useState(user);
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
  }, [user]);
  const handleEditClick = () => {
    setTempUser(user);
    setEditing(true);
  };
  const handleChange = (field, value) => {
    setTempUser((prev) => ({ ...prev, [field]: value }));
  };
  const handleSave = () => {
    setUser(tempUser);  
  };

  const handleCancel = () => {
    setEditing(false); 
  };


  if (!editing) {
    return <ProfileView user={user} onEdit={handleEditClick} />;
  }

  return (
    <EditScreen
      user={tempUser}
      onChange={handleChange}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
};

export default Profile;
