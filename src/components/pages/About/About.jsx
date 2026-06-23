import styles from './About.module.css';
import minhaFoto from '../../../assets/foto.jpg';

function About() {
  return (
    <div className="content-container">
      <section className={styles.aboutSection}>
        <h2>Sobre Mim</h2>
        <div className={styles.content}>
          <img 
            src={minhaFoto} 
            alt="Minha Foto de Perfil" 
            className={styles.avatar} 
          />
          
          <div className={styles.textContainer}>
            <p>
              Sou estudante de desenvolvimento front end focada no ecossistema JavaScript e apaixonada por criar interfaces interativas e responsivas com React. Ao longo do curso, venho aprimorando minhas habilidades.
            </p>
            <p>
              Busco sempre escrever código limpo, semântico e seguindo as melhores práticas do mercado. Meu objetivo é evoluir constantemente e contribuir em projetos desafiadores.
            </p>
            
            <div className={styles.info}>
              <p><strong>Email:</strong> jacqueline@gmail.com</p>
              <p><strong>Localização:</strong> Fortaleza - CE</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
