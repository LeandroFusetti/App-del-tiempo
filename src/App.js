import React, {useState} from 'react';
import './App.css';
import Nav from "./components/Nav.jsx"
import axios from "axios" 
import Cards from './components/Cards.jsx';
import About from './components/About';
import Ciudad from './components/Ciudad'
import {Routes,Route} from 'react-router-dom';

const apiKey = "4ae2636d8dfbdc3044bede63951a019b"


function App() {
      

      function onSearch(ciudad) {
        
        axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
          )
          .then((response => 
            setCities([...cities, response.data]))
            );
            
            
          };
          
      const onClose = (id)=>{
        setCities(cities.filter(city => city.id !== id))
      }
      const [cities, setCities] =useState([])
          console.log(cities);

      const onFilter =(cityId)=>{
        const ciudad = cities.filter(c=> c.id === parseInt(cityId))
        return ciudad[0]
      }

          
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
        <Routes>
        {/* <Route path='/ciudad/:ciudadId' render={({match})=><Ciudad />}/> */}

         {/*  <Route path="/" element={} /> */}
          
          <Route  path="/" element={<Cards
              cities={cities}
              onClose={onClose}
            />}/>
          <Route path={"/ciudad/:cityId"} element={<Ciudad onFilter={onFilter}/>}/>
          <Route  path="/about" element={<About/>}/>
        </Routes>
      {/* <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div> */}
      
      {/* <div>
        <Card
          max={Cairns.main.temp_max}  //le estoy pasando la variable por prop, en este caso max, se guarda en el objeto prop
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
          key={Cairns.weather[0].id}
        />
      </div> */}
      
      
        
      
      
      
    </div>
  );
}

export default App;
