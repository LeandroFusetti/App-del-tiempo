import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  console.log(props);
  return (
    <div>
      {props.cities.map(city=> 
      <Card 
          max={city.main.temp_max}  //le estoy pasando la variable por prop, en este caso max, se guarda en el objeto prop
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
          key={city.id}

      />


      )}
    </div>
  )
};