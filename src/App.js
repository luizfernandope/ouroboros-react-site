import Box from './components/Box';
import Carrosel from './components/Carrosel';
import Header from './components/Header';
import Planos from './components/Planos';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';
import Footer from './components/Footer';

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
