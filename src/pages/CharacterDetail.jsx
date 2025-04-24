import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)

      .then(res => res.json())
      .then(data => setCharacter(data))
      .catch(err => console.error('Error al cargar personaje:', err));
  }, [id]);

  if (!character) return <p>Cargando personaje...</p>;

  return (
    <Card sx={{ maxWidth: 400, margin: '30px auto', padding: 2 }}>
      {character.image && (
        <CardMedia
          component="img"
          height="400"
          image={character.image}
          alt={character.name}
        />
      )}
      <CardContent>
        <Typography variant="h5">{character.name || 'Sin nombre'}</Typography>
        <Typography>Raza: {character.race || 'Desconocida'}</Typography>
        <Typography>Especie: {character.species || 'Desconocida'}</Typography>
        <Typography>Género: {character.gender || 'Desconocido'}</Typography>
        <Typography>Estado: {character.status || 'Desconocido'}</Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterDetail;
