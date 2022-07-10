import React from 'react';

export default function AnimalIcons(props) {
  return <span>
    {props.animal === 'rhino' && '🦏'}
    {props.animal === 'camel' && '🐫'}
    {props.animal === 'giraffe' && '🦒'}
  </span>;
}