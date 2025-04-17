import { useNavigate } from "react-router-dom";
import { LoginForm } from "..";

/**
 * LoginCard component
 *
 * Este componente muestra un formulario de inicio de sesión (LoginForm). Una vez que el usuario se autentica correctamente,
 * será redirigido a la página de perfil.
 *
 * @returns {JSX.Element} - El componente que incluye el formulario de inicio de sesión.
 */

export const LoginCard = () => {
  const navigate = useNavigate();

  return (
    <div className="login-card">
      <LoginForm onUserAuth={() => navigate("/profile")} />
    </div>
  );
};
