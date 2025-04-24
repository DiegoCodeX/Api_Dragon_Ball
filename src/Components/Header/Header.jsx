import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1>Dragon Ball App</h1>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/masculino">Masculino</Link>
          <Link to="/femenino">Femenino</Link>
          <Link to="/acerca">Acerca de</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;