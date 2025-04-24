import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Proyecto inspirado en <span className="db-highlight">Dragon Ball</span>. Datos obtenidos de la API oficial. <a href="https://dragonball-api.com/api/characters" className="about-link">
            API
          </a>
        </p>
        <p className="footer-small">© {new Date().getFullYear()} Testigos Devs. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;