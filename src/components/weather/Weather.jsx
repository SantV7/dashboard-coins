import '../weather/weather.css'

const Weather = () => {


  return (
    <>
    <h2 className="cards-tittle">Clima</h2>

    <div className="weather-location">
        <div className="jp-capital">Tokyo - JP - icon do clima atual - 2°C</div>
        <div className="brasil-capital">Brasília - BR - icon do clima atual - 25°C</div>
        <div className="washington-capital">Washington - US - icon do clima atual - 29°C</div>
        <div className="brussels-capital">Brussels - BE - icon do clima atual - 17°C</div>
    </div>
    </>
  )
}

export default Weather