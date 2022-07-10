import React from 'react';
import AnimalIcons from './animals';

export default function Spectator(props) {
  return <div>
    {props.animalArray.map((animal, i) =>
      <AnimalIcons key={animal + i} animal={animal}/>)
    }
  </div>;
}
