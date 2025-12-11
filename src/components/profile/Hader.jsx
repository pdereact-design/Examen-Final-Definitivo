import { useNavigate } from "react-router-dom";

export const HaderProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="header-profile" onClick={() => navigate("/home")}>
      <span className="header-profile-name color-orange">Chaskys</span>
      <span className="header-profile-subname ">Delivery app</span>
    </div>
  );
};
