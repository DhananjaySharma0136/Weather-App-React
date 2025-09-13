import "./WeatherApp.css"
import Search_box from "./search-box.jsx";
import Info_box from "./box-info.jsx";
import {useState} from "react";
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState(
        {City:"Delhi",
        Humidity: 47,
        Pressure: 994,
        Wind_speed: 1.58,
        temperature: 37.31,
        temperature_max: 37.31,
        temperature_min: 37.31,
        weather: "broken clouds"})

    let updateInfo=(newInfo)=>{
     setWeatherInfo(newInfo)
    }
    
    return(<div className="WeatherApp">
    <h1>Weather App by Dhananjay Sharma</h1>
    <Search_box updateInfo={updateInfo}/>
    <Info_box Info={weatherInfo}/>
    </div>);
}