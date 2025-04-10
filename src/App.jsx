import './App.css'
import { useState, useEffect } from 'react'

import Header from './Components/Header/Header'
import CardCharacter from './Components/CardCharacter/CardCharacter'
import Pagination from '@mui/material/Pagination';

function App() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then(response => response.json())
      .then(data => {
        setCharacters(data);
        setTotalPages(1); // GitHub API no tiene paginación estándar
      });
  }, []);

  const handlePagination = (event, page) => {
    fetch(`https://api.github.com/users?since=${(page - 1) * 30}`)
      .then(response => response.json())
      .then(data => setCharacters(data));
  }

  return (
    <>
      <Header />
      <main>
        {characters.map((item) => {
          return (
            <CardCharacter
              key={item.id}
              name={item.login}
              image={item.ava_url}
            />
          )
        })}
      </main>
      <div id='pagination'>
        <Pagination onChange={handlePagination} count={totalPages} variant="outlined" shape="rounded" />
      </div>
    </>
  )
}

export default App
