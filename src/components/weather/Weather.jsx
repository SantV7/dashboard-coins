import { useEffect, useState } from 'react'
import '../weather/weather.css'
import gsap from 'gsap';
import { TiWeatherCloudy } from "react-icons/ti"; //ICON Rain

const Weather = () => {

  const capitalNames = {
    tokyo: 'Tokyo',
    brasilia: 'Brasilia',
    washington: 'Washington',
    brussels: 'Brussels'
  }

    const [tempTokyo, setTempTokyo] = useState('')
    const [tempBrasilia, setTempBrasilia] = useState('')
    const [tempBrussels, setTempBrussels] = useState('')
    const [tempWashington, setTempWashington] = useState('')

 

  useEffect(() => {
    const returnCapitalTemp = (capitalData) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capitalData}&appid=bf9babda0b7e59340e10f1e1dfe80371&units=metric`)
      .then(response => response.json())
      .then()
      .catch(error => console.error('Error', error))
    }  
    returnCapitalTemp(capitalNames.tokyo)

    // Tentativa de criar a função pra deixar o código mais limpo


    fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=bf9babda0b7e59340e10f1e1dfe80371&units=metric')
    .then(response => response.json())
    .then(data => {
      const climaTokyo = {
         temperatura: data.main.temp,
        
      }
      setTempTokyo(climaTokyo.temperatura)
      console.log(climaTokyo)
    })
    .catch(error => console.error('Erro:', error))



    fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasilia&appid=bf9babda0b7e59340e10f1e1dfe80371&units=metric')
    .then(response => response.json())
    .then(data => {
      const climaBrasilia = {
         temperatura: data.main.temp,
         umidade: data.main.humidity
      }

      setTempBrasilia(climaBrasilia.temperatura)
      console.log(climaBrasilia)
    })
    .catch(error => console.error('Erro:', error))



    fetch('https://api.openweathermap.org/data/2.5/weather?q=Brussels&appid=bf9babda0b7e59340e10f1e1dfe80371&units=metric')
    .then(response => response.json())
    .then(data => {
      const climaBrussels = {
         temperatura: data.main.temp,
         umidade: data.main.humidity
      }

      setTempBrussels(climaBrussels.temperatura)
      console.log(climaBrussels)
    })
    .catch(error => console.error('Erro:', error))



    fetch('https://api.openweathermap.org/data/2.5/weather?q=Washington&appid=bf9babda0b7e59340e10f1e1dfe80371&units=metric')
    .then(response => response.json())
    .then(data => {
      const climaWashington = {
         temperatura: data.main.temp,
         umidade: data.main.humidity
      }

      setTempWashington(climaWashington.temperatura)
      console.log(climaWashington)
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
        <div className='climate-capital-name' id="jp-capital">Tokyo - JP  <div className="climate-temperature"><TiWeatherCloudy size={32}/> {tempTokyo}°C</div></div>
        <div className='climate-capital-name' id="brasil-capital">Brasília - BR  <div className="climate-temperature"><TiWeatherCloudy size={32}/> {tempBrasilia}°C</div></div>
        <div className='climate-capital-name' id="washington-capital">Washington - US  <div className="climate-temperature"><TiWeatherCloudy size={32}/> {tempWashington}°C</div></div>
        <div className='climate-capital-name' id="brussels-capital">Brussels - BE  <div className="climate-temperature"><TiWeatherCloudy size={32}/> {tempBrussels}°C</div></div>
    </div>
    </>
  )
}

export default Weather