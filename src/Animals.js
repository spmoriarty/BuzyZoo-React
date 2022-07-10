import React from 'react';

export default function AnimalIcons(props) {
  return <span>
    {props.anima === 'rhino' && '🦏'}
    {props.anima === 'camel' && '🐫'}
    {props.anima === 'giraffe' && '🦒'}
  </span>;
}