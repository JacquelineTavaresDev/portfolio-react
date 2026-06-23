import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Projects from './components/pages/Projects/Projects';
import Skills from './components/pages/Skills/Skills';
import Contact from './components/pages/Contact/Contact';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <Router>
      <Navbar />
      <main className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/habilidades" element={<Skills />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
