import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Header from './components/header';
import Footer from './components/footer';

//telas
import Home from './pages/home/home';
import Projects from './pages/projetos/projetos';
import Projects_Info from './pages/projetos/projeto_detalhado';
import Contato from './pages/contatos/contato';

function App() {


  return (
    <Router>
      <div id='main'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/projeto/:nome" element={<Projects_Info />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App