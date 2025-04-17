/**
 * ErrorMessage component
 *
 * Muestra un mensaje de error con el texto proporcionado.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.error - El mensaje de error que se mostrará dentro del componente.
 *
 * @returns {JSX.Element}
 */

export const ErrorMessage = ({ error }) => {
  return (
    <div className="error-message">{`Ha ocurrido un error: ${error}`}</div>
  );
};
