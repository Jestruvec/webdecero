/**
 * FormInput component
 *
 * Un campo de entrada de formulario personalizable con validación y manejo de errores.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} [props.type="text"] - El tipo de campo de entrada.
 * @param {string} [props.placeholder] - El texto que aparece cuando el campo está vacío (opcional).
 * @param {function} props.register - Función de registro proporcionada por React Hook Form.
 * @param {string} props.name - El nombre del campo, usado para asociar el valor al formulario.
 * @param {Object} [props.validation] - Las reglas de validación del campo (opcional).
 * @param {Object} [props.error] - Objeto de error que contiene los mensajes de error, si existen (opcional).
 *
 * @returns {JSX.Element}
 */

export const FormInput = ({
  type = "text",
  placeholder,
  register,
  name,
  validation,
  error,
}) => {
  return (
    <div>
      <div className="input-container">
        <div className="input-prepend" />
        <input
          type={type}
          placeholder={placeholder}
          className={`form-input ${error ? "input-error" : ""}`}
          {...register(name, validation)}
        />
      </div>
      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
};
