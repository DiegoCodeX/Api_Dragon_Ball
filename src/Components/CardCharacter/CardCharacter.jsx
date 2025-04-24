import './CardCharacter.css';
import { useNavigate } from 'react-router-dom';

const CardCharacter = (props) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/personaje/${props.id}`)} style={{ cursor: 'pointer' }}>
      <div className="image-container">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="card-content">
        <div className="text-amarillo"><h2>{props.name}</h2></div>
        <div className="text-blanco"><h3>{props.gender}-{props.race}</h3></div>
        <div className="text-amarillo"><h3>Ki en estado base:</h3></div>
        <div className="text-blanco"><h3>{props.ki}</h3></div>
        <div className="text-amarillo"><h3>Ki total:</h3></div>
        <div className="text-blanco"><h3>{props.maxKi}</h3></div>
        <div className="text-amarillo"><h3>Afiliacion:</h3></div>
        <div className="text-blanco"><h3>{props.affiliation}</h3></div>    
      </div>
    </div>
  );
};

export default CardCharacter;
