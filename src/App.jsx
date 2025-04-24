import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './pages/Home';
import Male from './pages/Male';
import Female from './pages/Female';
import About from './pages/About';
import CharacterDetail from './pages/CharacterDetail';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/masculino" element={<Male />} />
          <Route path="/femenino" element={<Female />} />
          <Route path="/acerca" element={<About />} />
          <Route path="/personaje/:id" element={<CharacterDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
