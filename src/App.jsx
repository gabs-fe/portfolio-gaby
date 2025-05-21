import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Projetos from './pages/Projetos.jsx';
import Contato from './pages/Contato.jsx';

function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/sobre')}>Sobre</button>
      <button onClick={() => navigate('/projetos')}>Projetos</button>
      <button onClick={() => navigate('/contato')}>Contato</button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <NavigationButtons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}
