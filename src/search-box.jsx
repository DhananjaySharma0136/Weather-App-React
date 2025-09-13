import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./search-box.css";
import {useState} from "react";

export default function Search_box({updateInfo}){
     let [city,setCity]=useState("");
     let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    // const API_URL="http://api.openweathermap.org/geo/1.0/direct";
    const API_KEY="4b4debd13b371d394db6fbe8fd530c3a";
   let Weatherinfo= async()=>{
    try {let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonResponses=await response.json();
     console.log( jsonResponses);
     let result={City:city,
        temperature_max:jsonResponses.main.temp_max,
        temperature_min:jsonResponses.main.temp_min,
        temperature:jsonResponses.main.temp,
        weather:jsonResponses.weather[0].description,
        Humidity:jsonResponses.main.humidity,
        Pressure:jsonResponses.main.pressure,
        Wind_speed:jsonResponses.wind.speed
};
console.log(result);
return result;}
catch(err){throw err;}
   };
    let handleChange =(evt)=>{
       setCity(evt.target.value);
    };
    let handleSubmit=async(evt)=>{
        try{evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo=await Weatherinfo();
        updateInfo(newinfo);}
        catch(err){
            setError(true);
        }
    };
    return(
        <div className="City">
        <form onSubmit={handleSubmit} >
        <TextField id="City" label="City" variant="outlined" required value={city} onChange={handleChange} />
        <br></br><br></br>
        <Button variant="contained" type="submit">Search</Button>        
        {error  &&<p style={{color:"red"}}>No such place exists !</p>}
        </form>
        
        </div>
    );
}