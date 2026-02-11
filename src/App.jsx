import SideBar from "./components/sidebar/SideBar"
import '../src/styles/global.css'
import './styles/main.css'
import ConvertionCoins from "./components/convertionCoins/ConvertionCoins"
import Weather from "./components/weather/Weather"
import HourCapital from "./components/hourCapital/HourCapital"

function App() {


  return (
    <>

    <div className="all-grid">
      <SideBar />

      <main id="main-content">
        <ConvertionCoins />

        <div className="data-card" id="weather">
          <Weather />
        </div>

        <div className="data-card" id="hour-capital">
          <HourCapital />
        </div>

        <div className="data-card" id="history">
          <h3 className="cards-tittle">Historico</h3>
        </div>

        <div className="data-card" id="img-slide">
  
        </div>
        
      </main>
    </div>
    </>
  )
}

export default App
