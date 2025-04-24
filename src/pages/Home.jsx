import { useState, useEffect } from 'react';
import CardCharacter from '../Components/CardCharacter/CardCharacter';
import '../App.css';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters?limit=9999')
      .then(res => res.json())
      .then(data => {
        setCharacters(data.items);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar personajes:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
        <CircularProgress color="secondary" size={80} />
      </div>
    );
  }

  return (
    <div className="home-container">
      <main className="content">
        {characters.map((char) => (
          <CardCharacter
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image}
            race={char.race}
            gender={char.gender}
            ki={char.ki}
            maxKi={char.maxKi}
            affiliation={char.affiliation}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
