import { useState } from 'react';

import './App.css';

function App() {
  const [unicornSize, setUnicornSize] = useState(1);
  const [lionSize, setLionSize] = useState(1);
  const [isOpen, SsetIsOpen] = useState(false);
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
        </div>

      </section>
    </div>
  );
}

export default App;
