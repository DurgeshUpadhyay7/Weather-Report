import SearchBox from "./Searchbox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const[WeatherInfo, setWeatherInfo] = useState({
        
        city : "Delhi",
       feelslike: 41.36,
       temp: 43.61,
       humidity: 12,
       tempMin: 43.61,
       tempMax: 43.61,
       weather: "clear sky",
  });

    let updateInfo = (newinfo) => {
      setWeatherInfo(newinfo);
    }
    return(
    <div style={{textAlign: "center"}}>
        <h2>Weather App by Durgesh</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={WeatherInfo}/>
        </div>
        )
}