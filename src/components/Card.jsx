import React from 'react';

export default function Card({max,min,name,img,onClose}) { //estoy desestructurando el obj prop
  // acá va tu código
  return (<div>
    <p>Temp Max: {max}</p>
    <p>Temp Min: {min}</p>
    <p>Nombre: {name}</p>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icon" />
    <button onClick={onClose}>X</button>
  </div>)
};