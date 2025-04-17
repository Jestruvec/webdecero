import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../lib/hooks";
import { LoadingMessage } from "../atoms/LoadingMessage";

/**
 * AuthRoute component
 *
 * Componente de ruta protegida que verifica si el usuario está autenticado. Si el usuario está cargando, muestra un mensaje de carga.
 * Si el usuario está autenticado, redirige a la página de perfil; de lo contrario, muestra el contenido de la ruta protegida.
 *
 * @returns {JSX.Element} Un elemento JSX que muestra un mensaje de carga, redirige al perfil o muestra la ruta protegida.
 */

export const AuthRoute = () => {
  const { user, loading } = useUser();

  if (loading) return <LoadingMessage />;
  return user ? <Navigate to="/profile" replace /> : <Outlet />;
};
