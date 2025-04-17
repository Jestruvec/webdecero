import { useNavigate } from "react-router-dom";
import { CustomButton, UserCard } from "../../../Components";
import { useAuthActions } from "../../../lib/hooks";

export const Profile = () => {
  const navigate = useNavigate();
  const { logout } = useAuthActions();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="logout-btn">
        <CustomButton label="Cerrar sesion" onClick={handleLogout} />
      </div>

      <UserCard />
    </div>
  );
};
