import React from 'react';
import styles from "./Card.module.css";
import {Link} from 'react-router-dom'

export default function Card({max,min,name,img,onClose,id}) { //estoy desestructurando el obj prop
  // acá va tu código
  return (<div className={styles.containterCards}>

    <button className={styles.closeButton} onClick={()=>onClose(id)}>X</button>
    <Link to={`/ciudad/${id}`} style={{textDecoration: "none", color: "black"}} /* className={styles.link} */ >
      <h2>{name}</h2>  
    </Link>
    {/* <Button variant="danger">Danger</Button> */}
    
    <div className={styles.containterItems} >

      <div >
        <p>Max</p>
        <p>{`${max}°`}</p>
      </div>

      <div>
        <p>Min</p>
        <p>{`${min}°`}</p>
      </div>
      
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icon" width={"100px"} height={"100px"}/>
    </div>
  </div>)
};