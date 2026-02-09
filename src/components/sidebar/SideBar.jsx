import { MdHistory } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { SiConvertio } from "react-icons/si";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import './/../sidebar/sidebar.css'

const SideBar = () => {
  return (
      <>
       <nav id="sidebar">
        <ul id="ul-desktop">
          <li><a href="#">Dashboard <FaHouse size={23}/> </a></li>
          <li><a href="#">Conversão<SiConvertio size={23} /></a></li>
          <li><a href="#">Clima<TiWeatherWindyCloudy size={30}/></a></li>
          <li><a href="#">Histórico<MdHistory color="rgb(183, 183, 252)" size={30} /></a></li>
        </ul>
      </nav>
      </>
  )
}

export default SideBar