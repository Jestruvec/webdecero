import { useForm } from "react-hook-form";
import { CustomButton, ErrorMessage, FormInput } from "../";
import { useAuthActions } from "../../lib/hooks";

const formValidations = {
  user: {
    required: "El usuario es requerido",
  },
  password: {
    required: "La contraseña es requerida",
  },
};

/**
 * LoginForm component
 *
 * Componente de formulario de inicio de sesión. Permite al usuario ingresar su nombre de usuario y contraseña para autenticar su cuenta.
 * Si la autenticación es exitosa, ejecuta la función `onUserAuth` pasada como propiedad.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {Function} [props.onUserAuth] - Función que se ejecuta después de un inicio de sesión exitoso.
 *
 * @returns {JSX.Element} Un formulario de inicio de sesión con validación, botón de carga y manejo de errores.
 */

export const LoginForm = ({ onUserAuth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, loading, error: authError } = useAuthActions();

  const onSubmit = async (data) => {
    const response = await login(data.user, data.password);

    if (response && onUserAuth) {
      onUserAuth();
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        type="text"
        placeholder="Usuario"
        register={register}
        name="user"
        validation={formValidations.user}
        error={errors.user}
      />

      <FormInput
        type="password"
        placeholder="Contraseña"
        register={register}
        name="password"
        validation={formValidations.password}
        error={errors.password}
      />

      <CustomButton type="submit" label="Autenticar" loading={loading} />

      {authError && <ErrorMessage error={authError} />}
    </form>
  );
};
