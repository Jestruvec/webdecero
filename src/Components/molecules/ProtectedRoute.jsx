import { Navigate } from "react-router-dom";
import { useAuthActions } from "../../lib/hooks";

/**
 * ProtectedRoute component
 *
 * Este componente protege una ruta, redirigiendo a los usuarios no autenticados a la página de inicio de sesión. Si el usuario está autenticado, renderiza el contenido hijo.
 * Muestra un mensaje de carga mientras se está verificando el estado de autenticación.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {JSX.Element} props.children - El contenido hijo que será renderizado solo si el usuario está autenticado.
 *
 * @returns {JSX.Element} - Un componente que renderiza el contenido protegido o redirige al usuario.
 */

export const ProtectedRoute = ({ children }) => {
  const { authData } = useAuthActions();

  if (!authData) return <Navigate to="/login" replace />;

  return children;
};
