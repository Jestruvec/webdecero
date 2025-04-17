import { useUser } from "../../lib/hooks";
import { LoadingMessage } from "../atoms/LoadingMessage";
import { UserAvatar } from "../atoms/UserAvatar";
import map_marker_outline from "../../assets/svg/map-marker-outline.svg";
import { ErrorMessage } from "../atoms/ErrorMessage";

/**
 * UserCard component
 *
 * Este componente muestra una tarjeta con la información del usuario. Si el estado de carga es verdadero, muestra un mensaje de carga.
 * Si hay un error, muestra el mensaje de error. En caso contrario, se muestra la información del usuario.
 *
 * @returns {JSX.Element} - El componente que contiene la tarjeta de información del usuario.
 */

export const UserCard = () => {
  const { user, loading, error } = useUser();

  if (loading) {
    return <LoadingMessage />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <article className="user-card">
      <header className="user-header">
        <figure className="user-avatar">
          <div className="avatar-container">
            <UserAvatar imgUrl={user.image} />
          </div>
        </figure>

        <section className="user-main-details">
          <h1 className="user-name">{`${user.firstName} ${user.lastName}`}</h1>
          <p className="user-email">{user.email}</p>

          <div className="location-info">
            <img
              src={map_marker_outline}
              alt="Icono de ubicacion"
              className="icon"
            />
            <p>{`${user.address.city} - ${user.address.country}`}</p>
          </div>
        </section>
      </header>

      <section>
        <div className="details-grid">
          <div className="detail-item">
            <p className="detail-value">{user.birthDate}</p>
            <p className="detail-label">Cumpleaños</p>
          </div>
          <div className="detail-item">
            <p className="detail-value">{user.age}</p>
            <p className="detail-label">Edad</p>
          </div>
          <div className="detail-item">
            <p className="detail-value">{user.phone}</p>
            <p className="detail-label">Teléfono</p>
          </div>
        </div>
      </section>

      <section className="user-characteristics">
        <dl className="characteristics-list">
          <div className="characteristic-item">
            <dt>Tipo de sangre:</dt>
            <dd>{user.bloodGroup}</dd>
          </div>
          <div className="characteristic-item">
            <dt>Altura:</dt>
            <dd>{user.height} cm</dd>
          </div>
          <div className="characteristic-item">
            <dt>Peso:</dt>
            <dd>{user.weight} kg</dd>
          </div>
        </dl>
      </section>
    </article>
  );
};
