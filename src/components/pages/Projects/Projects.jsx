import styles from './Projects.module.css';

function Projects() {
  const listaProjetos = [
    {
      id: 1,
      titulo: "Lista de Tarefas (Next.js)",
      descricao: "Aplicação de gerenciamento de tarefas desenvolvida com Next.js, explorando os conceitos de roteamento dinâmico, renderização do lado do servidor (SSR) e persistência de dados de forma otimizada.",
      tecnologias: ["Next.js", "React", "JavaScript", "CSS Modules"],
      linkGithub: "https://github.com/JacquelineTavaresDev/lista-tarefas-nextjs",
      linkDeploy: "https://lista-tarefas-nextjs-jade.vercel.app/"
    },
    {
      id: 2,
      titulo: "Portal de Viagens Allturismo",
      descricao: "Plataforma completa para o setor de turismo focada na listagem, busca e filtragem avançada de pacotes de viagens. Desenvolvida com foco em componentização limpa, semântica e excelente experiência de navegação.",
      tecnologias: ["React", "JavaScript (ES6+)", "CSS Modules", "HTML5"],
      linkGithub: "https://github.com/JacquelineTavaresDev/Portal_Viagens_Allturismo",
      linkDeploy: "https://portal-viagens-allturismo.vercel.app/"
    },
    {
      id: 3,
      titulo: "Diário de Bordo (PWA)",
      descricao: "Aplicação móvel estilo Diário de Bordo desenvolvida sob o conceito de Progressive Web App (PWA). Permite o registro de jornadas de forma otimizada, contando com recursos como suporte offline e instalação direto no dispositivo.",
      tecnologias: ["React", "PWA (Service Workers)", "LocalStorage", "CSS Modules"],
      linkGithub: "https://github.com/JacquelineTavaresDev/diario-de-bordo-pwa",
      linkDeploy: "https://diario-de-bordo-pwa-two.vercel.app/"
    }
  ];

  return (
    <div className="content-container">
      <section className={styles.container}>
        <h2>Meus Projetos</h2>
        <p>Confira as principais aplicações que desenvolvi, explorando diferentes arquiteturas e ecossistemas:</p>
        
        <div className={styles.grid}>
          {listaProjetos.map((projeto) => (
            <div key={projeto.id} className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                <div className={styles.tags}>
                  {projeto.tecnologias.map((tech, i) => (
                    <span key={i} className={styles.tag}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className={styles.links}>
                <a href={projeto.linkGithub} target="_blank" rel="noreferrer">GitHub</a>
                <a href={projeto.linkDeploy} target="_blank" rel="noreferrer">Demo Online</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
