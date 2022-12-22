import React from "react";
import {useParams} from "react-router-dom"

export default function Ciudad(props) {
    
        const {cityId} = useParams()
        const city = props.onFilter(cityId)
        console.log(city);
    return (

        

        <div className="ciudad">
                {<div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.main.temp} ºC</div>
                        {/* <div>Clima: {city.weather.id}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div> */}
                    </div>
                </div>}
        </div>
    )
}