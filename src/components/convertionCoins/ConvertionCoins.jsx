import { IoMdArrowRoundForward } from "react-icons/io";
import { BiEuro } from "react-icons/bi";
import { TbCurrencyDollar } from "react-icons/tb";
import { PiCurrencyJpyBold } from "react-icons/pi";
import '../convertionCoins/convertion-coins.css'

const ConvertionCoins = () => {

  return (
    <>
        <div className="data-card" id="convertion-coins">
          <h2 className="cards-tittle">Conversão</h2>

          <div className="local-explication-money">
            <div className="money-explication">
               <div className="type-money">EUR / Euro</div>
               <div className="type-money">USD / Dollar</div>
               <div className="type-money">BRL / Real</div>
               <div className="type-money">JPY / Iene</div>
            </div>

            <div className="arrow-explications">
              <IoMdArrowRoundForward size={21} />
              <IoMdArrowRoundForward size={21} />
              <IoMdArrowRoundForward size={21} />
              <IoMdArrowRoundForward size={21} />
            </div>

            <div className="symbols-money">
              <BiEuro size={25} />
              <TbCurrencyDollar size={25}/>
              R$
              <PiCurrencyJpyBold size={25}/>
            </div>

          </div>


          <div className="area-convertion">
            
          </div>
        </div>

   
    </>
  )
}

export default ConvertionCoins