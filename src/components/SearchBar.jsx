import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  const[searchInput, setSearchImput] = React.useState("");

  const changeHandler= (e)=>{
    setSearchImput(e.target.value);
  }
  
  return (<div>
    
          <input type="text" name="search" id="search" placeholder="Busca tu ciudad..." 
          onChange={changeHandler}/> 
          <button onClick={()=>props.onSearch(searchInput)}>Agregar</button> 

        </div>  // el onclick se tiene que ejecutar como un arrow function porque sino la funcion se va a ejecutar a penas se cargue el componente
  )
        
};