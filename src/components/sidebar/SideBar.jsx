import { MdHistory } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { SiConvertio } from "react-icons/si";
import { PiCurrencyJpyBold } from "react-icons/pi";
import { PiCurrencyDollarSimpleDuotone } from "react-icons/pi";
import { FaBrazilianRealSign } from "react-icons/fa6";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdEuro } from "react-icons/md";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { GiBrazilFlag } from "react-icons/gi";
import './/../sidebar/sidebar.css'


const SideBar = () => {

    const mes = 1 + new Date().getMonth()
    console.log(mes)


    const dayToday =  new Date().getDate() + '/' +  mes.toString().padStart('2', 0) + '/' + new Date().getFullYear()
  return (
      <>
       <nav id="sidebar">
        <ul id="ul-desktop">
          <li><a href="#">Dashboard <FaHouse className="icon-hover" size={23}/> </a></li>
          <li><a href="#">Conversão<SiConvertio className="icon-hover" size={23} /></a></li>
          <li><a href="#">Clima<TiWeatherWindyCloudy className="icon-hover" size={30}/></a></li>
          <li><a href="#">Histórico<MdHistory className="icon-hover" color="rgb(183, 183, 252)" size={30} /></a></li>
        </ul>

        <section id="sidebar-sect-icons">
            <header>
                <p>Dia: </p>
                <div> {dayToday}</div>
            </header>

            <div className="display-icons">
                <div className="icons-coins">
                    <FaBrazilianRealSign size={27} color="white" />
                    <PiCurrencyJpyBold size={27} color="white" />
                    <MdEuro size={27} color="white" />
                    <PiCurrencyDollarSimpleDuotone size={27} color="white" />
                </div>
                <div className="icons-flags">
                    <GiBrazilFlag size={46} color="green" />
                    <LiaFlagUsaSolid size={46} color="rgb(178, 171, 243)" />
                </div>
            </div>
        </section>
      </nav>
      </>
  )
}

export default SideBar