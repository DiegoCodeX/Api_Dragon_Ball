import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Components/CardCharacter/CardCharacter.css';
import Footer from '../Components/Footer/Footer';

const DetailsCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`) 
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <p style={{ color: 'white' }}>Cargando personaje...</p>;

  return (
    <div>
      <div className="card" style={{ margin: '40px auto', maxWidth: '450px' }}>
      <div className="image-container">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="card-content">
        <div className="text-amarillo"><h2>{character.name}</h2></div>
        <div className="text-blanco"><h3>Raza: {character.race}</h3></div>
        <div className="text-blanco"><h3>Especie: Desconocida</h3></div>
        <div className="text-blanco"><h3>Género: {character.gender}</h3></div>
        <div className="text-blanco"><h3>Estado: Desconocido</h3></div>
        <div className="text-blanco"><h3>Planeta de origen: {character.originPlanet.name}</h3></div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsCharacter;