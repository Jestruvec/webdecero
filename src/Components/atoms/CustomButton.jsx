import { LoadingMessage } from "./LoadingMessage";

/**
 * CustomButton component
 *
 * Un botón personalizable que puede mostrar un mensaje de carga mientras está en proceso.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} [props.type="button"] - El tipo del botón, por defecto "button".
 * @param {string} props.label - El texto que aparecerá dentro del botón.
 * @param {function} [props.onClick] - Función que se ejecutará cuando se haga clic en el botón.
 * @param {boolean} [props.loading=false] - Indica si el botón está en estado de carga, lo que ocultará el texto y mostrará un mensaje de carga.
 * @param {boolean} [props.disabled=false] - Si es `true`, deshabilita el botón.
 *
 * @returns {JSX.Element}
 */

export const CustomButton = ({
  type = "button",
  label,
  onClick,
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="custom-button"
      disabled={disabled || loading}
    >
      {loading ? <LoadingMessage /> : label}
    </button>
  );
};
