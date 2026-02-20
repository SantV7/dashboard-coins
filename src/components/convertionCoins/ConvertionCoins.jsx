import { IoMdArrowRoundForward } from "react-icons/io";
import { BiEuro } from "react-icons/bi";
import { TbCurrencyDollar } from "react-icons/tb";
import { PiCurrencyJpyBold } from "react-icons/pi";
import '../convertionCoins/convertion-coins.css'
import { useEffect, useState } from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const ConvertionCoins = () => {

  const [convertCoins, setConvertCoins] = useState(null)
  
  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        setConvertCoins(data.rates)
      })
      .catch(error => console.log('erro na requisição para converter', error))

    const requestApiConvert = setInterval(() => {
      fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => response.json())
        .then(data => {
          setConvertCoins(data.rates)
        })
        .catch(error => console.log('erro na requisição para converter', error))
    }, 6400)

    return () => clearInterval(requestApiConvert)
  }, [])


  if (convertCoins === null) {
    return (
      <div className="data-card" id="convertion-coins">
        <h2 className="cards-tittle">Conversão <FaMoneyBillTransfer size={37} /></h2>
        <div className="area-convertion">
          <p>Carregando valores das moedas...</p>
        </div>
      </div>
    )
  }

  return (
    <>
        <div className="data-card" id="convertion-coins">
          <h2 className="cards-tittle">Conversão <FaMoneyBillTransfer size={37} /></h2>

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
              <p id="main-usd">USD = {convertCoins.USD}</p>
              <p>USD = {convertCoins.EUR} EUR</p>
              <p>USD = {convertCoins.BRL} BRL</p>
              <p>USD = {convertCoins.JPY} JPY</p>
            </div>
          </div>

        </div>
    </>
  )
}

export default ConvertionCoins