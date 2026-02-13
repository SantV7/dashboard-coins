import { useEffect } from 'react'
import '../weather/weather.css'
import gsap from 'gsap';

import { TiWeatherDownpour } from "react-icons/ti"; //ICON Rain
import { TiWeatherCloudy } from "react-icons/ti"; //ICON Rain
import { TiWeatherPartlySunny } from "react-icons/ti"; //ICON Sun

const Weather = () => {

  useEffect(() => {


    gsap.fromTo('.climate-temperature', {
      opacity: 0,
      y: 100
    }, {
      duration: 2.3,
      ease: 'power3',
      opacity:1,
      y: 0
    })
  }, [])



  return (
    <>
    <h2 id='weather-h2' className="cards-tittle">Clima <TiWeatherCloudy size={42}/></h2>

    <div className="weather-location">
        <div className='climate-capital-name' id="jp-capital">Tokyo - JP  <div className="climate-temperature"><TiWeatherCloudy size={32}/> °C</div></div>
        <div className='climate-capital-name' id="brasil-capital">Brasília - BR  <div className="climate-temperature"><TiWeatherCloudy size={32}/> °C</div></div>
        <div className='climate-capital-name' id="washington-capital">Washington - US  <div className="climate-temperature"><TiWeatherCloudy size={32}/> °C</div></div>
        <div className='climate-capital-name' id="brussels-capital">Brussels - BE  <div className="climate-temperature"><TiWeatherCloudy size={32}/> °C</div></div>
    </div>
    </>
  )
}

export default Weather