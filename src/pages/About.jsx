import './About.css';
import Footer from '../Components/Footer/Footer';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2 className="about-heading">Acerca de Nosotros</h2>
        <p className="about-paragraph">
          <strong className="about-strong">Nombres:</strong> Diego Alejandro Ceballos Rodríguez y Angelo Ramírez Rojas
        </p>
        <p className="about-paragraph">
          <strong className="about-strong">Correos:</strong>{' '}
          <a href="mailto:di.ceballos@udla.edu.co" className="about-link">
            di.ceballos@udla.edu.co
          </a>{' '}
          y{' '}
          <a href="mailto:aramirezr2409@hotmail.com" className="about-link">
            aramirezr2409@hotmail.com
          </a>
        </p>
        <p className="about-paragraph">
          <strong className="about-strong">Proyecto:</strong> React - Ingeniería de Sistemas 2025
        </p>
      </section>

    <Footer />  
    </div>
  );
};

export default About;
