import SideBar from "./components/sidebar/SideBar"
import '../src/styles/global.css'
import './styles/main.css'


function App() {


  return (
    <>

    <div className="all-grid">
      <SideBar />


      <main id="main-content">
        <div className="data-card" id="convertion-coins">
          <h2>Conversão</h2>
        </div>

        <div className="data-card" id="weather">
          <h2>Clima</h2>
        </div>

        <div className="data-card" id="timer-country">
          <h2>hora de cada pais atual</h2>
        </div>

        <div className="data-card" id="history">
          <h3>Historico</h3>
        </div>
        <div className="data-card" id="img-slide">
          <h2>Slide img Country</h2>
        </div>
        
      </main>
    </div>
    </>
  )
}

export default App
