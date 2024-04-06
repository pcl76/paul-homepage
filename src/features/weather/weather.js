import React from 'react';
import styles from "./weather.module.css";


const weather = (props) => {
    const URL1 = "https://openweathermap.org/img/wn/"
    const URL2 = "@2x.png"
    const icon = props.weatherResult.weather[0].icon;
    const URL_icon = URL1 + icon + URL2;


    return (
        <div className={styles.weather}> 
            <img src={URL_icon} alt="weather icon"/>
            <div>
                <h3>{`${Math.round(props.weatherResult.main.temp-273)} °C` }</h3>
                <p>{props.weatherResult.weather[0].description}</p>
            </div>
        </div>

    )
}

export default weather;