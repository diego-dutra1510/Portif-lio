import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Header from './components/header';
import Footer from './components/footer';

//telas
import Home from './pages/home/home';

function App() {


  return (
    <Router>
      <div id='main'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App