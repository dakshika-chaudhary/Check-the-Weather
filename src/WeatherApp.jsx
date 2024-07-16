import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import {useState} from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Place",
        temp:17.05,
        tempMin:16.17,
        tempMax:17.05,
        humidity:94,
        weather:"mist", 
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };

    return (
<div style={{textAlign:"center"}}>
    <u><h1>Check the Weather</h1></u>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
</div>

    );

}