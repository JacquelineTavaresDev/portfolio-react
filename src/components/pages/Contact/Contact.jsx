import { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigada, ${formData.nome}! Sua mensagem foi enviada de forma simulada.`);
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <div className="content-container">
      <section className={styles.contactSection}>
        <h2>Contato</h2>
        <p>Mande uma mensagem ou me acompanhe nas redes sociais!</p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
          </div>
          <div className={styles.group}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles.group}>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="5" value={formData.mensagem} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className={styles.btnSubmit}>Enviar Mensagem</button>
        </form>

        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/jacqueline-ribeiro-01/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/JacquelineTavaresDev" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
