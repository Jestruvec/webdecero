/**
 * UserAvatar component
 *
 * Muestra una imagen de avatar. Si no se proporciona una URL personalizada, se usa una imagen por defecto.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} [props.imgUrl] - URL de la imagen del perfil del usuario. Si no se proporciona, se usa una imagen predeterminada.
 *
 * @returns {JSX.Element} Un elemento JSX que muestra la imagen del avatar.
 */

import UserProfile from "../../assets/images/web-de-cero.png";

export const UserAvatar = ({ imgUrl }) => {
  return (
    <div className="avatar">
      <img src={imgUrl ? imgUrl : UserProfile} alt="Foto de perfil" />
    </div>
  );
};
