import React from 'react';
import logo from './logo.svg';
import './App.css';
import beach from './img/beach.jpg'

//import de componentes
import Button from './components/boton/btn';
import Input from './components/input/input';
import Carta from './components/carta/carta';

const App = () => (
  <>
    <div className="botones">
      <h1>Botones</h1>
      <Button className="btn primary slash">Hola</Button>
      <Button className="btn secondary slash">Secondary</Button>
      <Button className="btn success grow">Success</Button>
      <Button className="btn danger">Danger</Button>
      <Button className="btn warning">Warning</Button>
      <Button className="btn info">Info</Button>
      <Button className="btn simple">Simple</Button>
    </div>

    <div className="inputs">
      <h1>Inputs</h1>
      <form>
        <Input required />
      </form>
    </div>

    <div className="cartas">
      <h1>Cartas</h1>
      <div style={{ "display": "flex", "justifyContent": "space-between" }}>

        <Carta img={logo} titulo="Titulo test" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum id ex at posuere. Morbi euismod varius lectus, ac efficitur enim cursus at. Suspendisse porta elit in ultricies tristique.</Carta>
        <Carta className="carta carta-material" img={beach} titulo="Carta material">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum id ex at posuere. Morbi euismod varius lectus, ac efficitur enim cursus at. Suspendisse porta elit in ultricies tristique.</Carta>
        <Carta className="carta-material round-img" img={beach} titulo="Carta material con img redonda" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum id ex at posuere. Morbi euismod varius lectus, ac efficitur enim cursus at. Suspendisse porta elit in ultricies tristique.</Carta>

      </div>
    </div>

    <div className="entradas">
      <h1>Entradas</h1>
    </div>


  </>
)

export default App;
