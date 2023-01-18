import Box from './components/Box/Box';
import Carrosel from './components/Carrosel/Carrosel';
import Header from './components/Header/Header';
import Planos from './components/Planos/Planos';
import Tabela from './components/Tabela/Tabela';
import Titulo from './components/Titulo/Titulo';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <div className="App">
    <Header/>
    <Carrosel></Carrosel>
    <Titulo></Titulo>
    <Box></Box>
    <Titulo/>
    <Tabela></Tabela>
    <Titulo></Titulo>
    <Box></Box>
    <Titulo></Titulo>
    <Planos></Planos>
    <Footer/>
    </div>
  );
}

export default App;
