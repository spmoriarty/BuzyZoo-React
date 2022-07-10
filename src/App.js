import { useState } from 'react';
import Spectator from './Spectators';
import './App.css';
import Sign from './Sign';

function App() {
  const [unicornSize, setUnicornSize] = useState(1);
  const [lionSize, setLionSize] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [animalArray, setAnimalArray] = useState(['rhino', 'giraffe', 'camel']);

  const unicornStyle = {
    fontSize: `${unicornSize}rem`,
    background: 'orange',
  };

  const lionStyle = {
    fontSize: `${lionSize}rem`,
    background: 'black',
  };

  function handleAddRhino() {
    setAnimalArray([...animalArray, 'rhino']);
  }

  function handleAddGiraffe() {
    setAnimalArray([...animalArray, 'giraffe']);
  }

  function handleAddCamel() {
    setAnimalArray([...animalArray, 'camel']);
  }

  function removeLastAnimal() {
    setAnimalArray(animalArray.slice(0, animalArray.length - 1));
  }


  return (
    <div className='main'>
      <section className='duel'>
        <div className='unicorn'>
          <p style={unicornStyle}>🦄</p>
          <button onClick={() => setUnicornSize(unicornSize + 1)}>Feed Unicorn</button>
          <button onClick={() => setUnicornSize(unicornSize - 1)}> Unicorn hoofs the lion!</button>
        </div>
        <div className='lion'>
          <p style={lionStyle}>🦁</p>
          <button onClick={() => setLionSize(lionSize + 1)}>Feed Lion</button>
          <button onClick={() => setLionSize(lionSize - 1)}> Lion claws the Unicorn!</button>
        </div>
      </section>
      <div className='sign'>
        <Sign isOpen={isOpen} />
        <section>
          <button onClick={() => setIsOpen(false)}>The fight is on!</button>
          <button onClick={() => setIsOpen(true)}>The fight is delayed.</button>
        </section>
      </div>

      <section className='spectators'>
        <h3>Animals gather to watch the spectacle</h3>
        <Spectator animalArray={animalArray} />
        <div>
          <button onClick={handleAddRhino}>Add Rhino</button>
          <button onClick={handleAddGiraffe}>Add Giraffe</button>
          <button onClick={handleAddCamel}>Add Camel</button>
          <button onClick={removeLastAnimal}>Animal got to close</button>
        </div>
      </section>

    </div>
  );
}

export default App;
