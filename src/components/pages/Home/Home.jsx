import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className="content-container">
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Olá, eu sou uma <span className={styles.highlight}>Desenvolvedora Junior React</span>
        </h1>
        <p className={styles.subtitle}>
          Bem-vindo ao meu portfólio profissional. Aqui você encontrará os principais projetos e tecnologias que domino.
        </p>
        <div className={styles.buttons}>
          {/* CORRIGIDO PARA PORTUGUÊS */}
          <Link to="/projetos" className={styles.btnPrimary}>Ver Projetos</Link>
          <Link to="/contato" className={styles.btnSecondary}>Entre em Contato</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
