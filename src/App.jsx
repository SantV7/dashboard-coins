import SideBar from "./components/sidebar/SideBar"
import '../src/styles/global.css'
import './styles/main.css'
import ConvertionCoins from "./components/convertionCoins/ConvertionCoins"




function App() {


  return (
    <>

    <div className="all-grid">
      <SideBar />

      <main id="main-content">
        <ConvertionCoins />

        <div className="data-card" id="weather">
          <h2 className="cards-tittle">Clima</h2>
        </div>

        <div className="data-card" id="timer-country">
          <h2 className="cards-tittle">hora de cada pais atual</h2>
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
