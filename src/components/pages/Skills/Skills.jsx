import styles from './Skills.module.css';

function Skills() {
  const tecnicas = ["React.js", "JavaScript (ES6+)", "HTML5 / CSS3", "CSS Modules", "Git & GitHub", "Consumo de APIs (REST)"];
  
  return (
    <div className="content-container">
      <section className={styles.skillsSection}>
        <h2>Minhas Habilidades</h2>
        <p className={styles.intro}>Principais tecnologias e competências adquiridas ao longo do curso:</p>
        <div className={styles.grid}>
          {tecnicas.map((skill, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>⚡</div>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
