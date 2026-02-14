import { useEffect } from 'react'
import '../weather/weather.css'
import gsap from 'gsap';
import { TiWeatherCloudy } from "react-icons/ti"; //ICON Rain

const Weather = () => {

  useEffect(() => {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=bf9babda0b7e59340e10f1e1dfe80371&units=metric')
    .then(response => response.json())
    .then(data => {
      const clima = {
         cidade: data.name,
         temperatura: data.main.temp,
         umidade: data.main.humidity
      }
      console.log(clima)
    })
    .catch(error => console.error('Erro:', error))

    

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