import { Navigate, Outlet } from "react-router-dom";
import { useAuthActions } from "../../lib/hooks";

/**
 * AuthRoute component
 *
 * Componente de ruta protegida que verifica si el usuario está autenticado. Si el usuario está cargando, muestra un mensaje de carga.
 * Si el usuario está autenticado, redirige a la página de perfil; de lo contrario, muestra el contenido de la ruta protegida.
 *
 * @returns {JSX.Element} Un elemento JSX que muestra un mensaje de carga, redirige al perfil o muestra la ruta protegida.
 */

export const AuthRoute = () => {
  const { authData } = useAuthActions();

  return authData ? <Navigate to="/profile" replace /> : <Outlet />;
};
