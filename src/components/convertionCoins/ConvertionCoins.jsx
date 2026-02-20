import { IoMdArrowRoundForward } from "react-icons/io";
import { BiEuro } from "react-icons/bi";
import { TbCurrencyDollar } from "react-icons/tb";
import { PiCurrencyJpyBold } from "react-icons/pi";
import '../convertionCoins/convertion-coins.css'
import { useEffect } from "react";

const ConvertionCoins = () => {


  useEffect(() => {
    const requestApiConvert = setInterval(() => {
      fetch()
      .then(response => response.json())
      .then()
      .catch(error => console.log('erro na requisão para converter, aguarde e recarregue a página') && alert('erro na requisão para converter, aguarde e recarregue a página'))

      return () => clearInterval(requestApiConvert)
    }, 60000)
  }, [])


  
  return (
    <>
        <div className="data-card" id="convertion-coins">
          <h2 className="cards-tittle">Conversão</h2>

          <div className="convertion-info">
            <div className="local-explication-money">
              <div className="money-explication">
                 <div className="type-money">EUR</div>
                 <div className="type-money">USD</div>
                 <div className="type-money">BRL</div>
                 <div className="type-money">JPY</div>
              </div>

              <div className="arrow-explications">
                <IoMdArrowRoundForward size={25} />
                <IoMdArrowRoundForward size={25} />
                <IoMdArrowRoundForward size={25} />
                <IoMdArrowRoundForward size={25} />
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

        </div>

   
    </>
  )
}

export default ConvertionCoins