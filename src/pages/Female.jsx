import { useEffect, useState } from 'react';
import CardCharacter from '../Components/CardCharacter/CardCharacter';
import '../App.css';
import Footer from '../Components/Footer/Footer';

const Female = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters?limit=100')
      .then(res => res.json())
      .then(data => {
        const females = data.items.filter(item => item.gender === 'Female');
        setCharacters(females);
      });
  }, []);

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

export default Female;
