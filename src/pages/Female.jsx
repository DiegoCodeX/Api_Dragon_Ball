import { useEffect, useState } from 'react';
import CardCharacter from '../Components/CardCharacter/CardCharacter';
import '../App.css';

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
    <main>
      {characters.map(char => (
       <CardCharacter
       key={char.id}
       id={char.id}
       name={char.name}
       image={char.image}
       gender={char.gender}
       race={char.race}
       ki={char.ki}
       maxKi={char.maxKi}
       affiliation={char.affiliation}
     />
      ))}
    </main>
  );
};

export default Female;
