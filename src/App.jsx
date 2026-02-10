import SideBar from "./components/sidebar/SideBar"
import '../src/styles/global.css'
import './styles/main.css'
import { BiEuro } from "react-icons/bi";
import { TbCurrencyDollar } from "react-icons/tb";
import { PiCurrencyJpyBold } from "react-icons/pi";
import { IoMdArrowRoundForward } from "react-icons/io";


function App() {


  return (
    <>

    <div className="all-grid">
      <SideBar />

      <main id="main-content">
        <div className="data-card" id="convertion-coins">
          <h2>Conversão</h2>

          <div className="local-explication-money">
            <div className="money-explication">
               <div className="type-money">EUR Euro</div>
               <div className="type-money">USD Dollar</div>
               <div className="type-money">BRL Real</div>
               <div className="type-money">JPY Iene</div>
            </div>

            <div className="arrow-explications">
              <IoMdArrowRoundForward size={21} />
              <IoMdArrowRoundForward size={21} />
              <IoMdArrowRoundForward size={21}/>
              <IoMdArrowRoundForward size={21}/>
            </div>

            <div className="symbols-money">
              <BiEuro size={25} />
              <TbCurrencyDollar size={25}/>
              R$
              <PiCurrencyJpyBold size={25}/>
            </div>

          </div>
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
