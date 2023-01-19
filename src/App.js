import Box from './components/Box/Box';
import Carrosel from './components/Carrosel/Carrosel';
import Header from './components/Header/Header';
import Planos from './components/Planos/Planos';
import Tabela from './components/Tabela/Tabela';
import Titulo from './components/Titulo/Titulo';
import Footer from './components/Footer/Footer';
import seta from './img/seta.svg'

function App() {


  return (
    
    <div className="App">
    <Header/>
    <Carrosel></Carrosel>
    <Titulo text="Treinos" id="treinos"></Titulo>
    <div className="caixas">
      <Box image="https://images.unsplash.com/photo-1486215397028-cb4f31efea3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" title='Boxe' description='O boxe ou pugilismo é um esporte de combate e arte marcial, no qual os lutadores usam apenas os punhos, tanto para a defesa, quanto para o ataque.'></Box>
      <Box image="https://www.lojamaria.com.br/wp-content/uploads/2021/02/jiu-e1613139289896.jpg" title='Jiu-jitsu' description='Jiu-Jitsu é uma arte marcial japonesa que utiliza uma série de diferentes técnicas e golpes corporais com o objetivo de derrotar ou imobilizar o oponente.'></Box>
      <Box image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7c7l2EVIRGXPolk6YFnvmmKjToltLMTIlWg&usqp=CAU" title='Musculação' description='A musculação é um tipo de exercício realizado com pesos de diversas cargas, amplitude e tempo de contração, o que a faz uma atividade física indicada para pessoas de diferentes idades e objetivos.'></Box>
      <Box image="https://static.tuasaude.com/media/article/ne/lq/crossfit_37303.webp" title='Cross-fit' description='O crossfit é uma modalidade esportiva que tem como objetivo promover melhora da capacidade cardiorrespiratória, condicionamento físico e resistência muscular por meio da combinação de exercícios funcionais.'></Box>
    </div>
    <div className="role">
            <img src={seta} alt="scroll horizontal icon"/>
            <p>role</p>
    </div>
    
    <Titulo text="Horário de treinos" id="horario"/>
    <Tabela></Tabela>
    <Titulo text="Unidades" id="unidades"></Titulo>
    <div className="caixas">
      <Box image={"https://user-images.githubusercontent.com/74561722/213339118-3dbac40f-85a0-4c34-a1a8-c0bcc1f8607d.png"} title='São Paulo' description='Rua avenida 123, bairro'></Box>
      <Box image={"https://user-images.githubusercontent.com/74561722/213339118-3dbac40f-85a0-4c34-a1a8-c0bcc1f8607d.png"} title='Santos' description='Rua avenida 123, bairro'></Box>
      <Box image={"https://user-images.githubusercontent.com/74561722/213339118-3dbac40f-85a0-4c34-a1a8-c0bcc1f8607d.png"} title='Vila maria' description='Rua avenida 123, bairro'></Box>
      <Box image={"https://user-images.githubusercontent.com/74561722/213339118-3dbac40f-85a0-4c34-a1a8-c0bcc1f8607d.png"} title='Mooca' description='Rua avenida 123, bairro'></Box>
    </div>
    <div className="role">
            <img src={seta} alt="scroll horizontal icon"/>
            <p>role</p>
    </div>
    <Titulo text="Planos" id="planos"></Titulo>
    <Planos></Planos>
    <Footer/>
    </div>
  );
}

export default App;
