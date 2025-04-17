/**
 * LoadingMessage component
 *
 * Muestra un mensaje de carga con un spinner animado.
 *
 * @returns {JSX.Element} Un elemento JSX que muestra el mensaje de carga con un spinner.
 */

export const LoadingMessage = () => {
  return (
    <div className="loading-container">
      <span className="spinner" />
      Cargando...
    </div>
  );
};
