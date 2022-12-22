import React from 'react';
import Card from './Card';
import styles from "./Cards.module.css"

export default function Cards({cities,onClose}) {
  // acá va tu código
  // tip, podés usar un map
  
  return (
    <div className={styles.divContainer}>
      
      {cities.length===0? 
      <h1>No hay ciudades</h1>:
      cities.map(city=> 
      <Card 
          max={city.main.temp_max}  //le estoy pasando la variable por prop, en este caso max, se guarda en el objeto prop
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={onClose}
          key={city.id}
          id={city.id}
      />
      )}
    </div>
  )
};