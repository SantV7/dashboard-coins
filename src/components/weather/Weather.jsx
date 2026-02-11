import { useState } from 'react'
import '../weather/weather.css'
import { TiWeatherCloudy } from "react-icons/ti";

const Weather = () => {

  const [weatherTokyo, setWeatherTokyo] = useState(null)
  const [weatherBrasilia, setWeatherBrasilia] = useState(null)
  const [weatherWashington, setWeatherWashington] = useState(null)
  const [weatherBrussels, setWeatherBrussels] = useState(null)


  return (
    <>
    <h2 id='weather-h2' className="cards-tittle">Clima <TiWeatherCloudy size={54}/></h2>

    <div className="weather-location">
        <div className='climate-capital-name' id="jp-capital">Tokyo - JP  <div className="climate-temperature">2°C</div></div>
        <div className='climate-capital-name' id="brasil-capital">Brasília - BR  <div className="climate-temperature">25°C</div></div>
        <div className='climate-capital-name' id="washington-capital">Washington - US  <div className="climate-temperature">29°C</div></div>
        <div className='climate-capital-name' id="brussels-capital">Brussels - BE  <div className="climate-temperature">17°C</div></div>
    </div>
    </>
  )
}

export default Weather