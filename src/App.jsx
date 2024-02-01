import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/paginas/Home';
import QuemSomos from './components/paginas/QuemSomos';
import FaleConosco from './components/paginas/FaleConosco';
import Footer from './components/footer';
import styles from './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <h1>Transportadora Plus</h1>
      <h3> Entregamos mais do que encomendas, levamos confiança e eficiência a cada destino!</h3>
      </header>

      <Router>
      <NavBar />

        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
        </Routes>

        <Routes>
          <Route path='/quemsomos' element={<QuemSomos/>}></Route>
        </Routes>

        <Routes>
          <Route path='/faleconosco' element={<FaleConosco/>}></Route>
        </Routes>

        <Footer />

      </Router>

  

    </div>
  );
}

export default App;
