import '../hourCapital/hour-capital.css'
const HourCapital = () => {

    let hourBrasilia = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()

    


  return (
    <>
    <h3 className="cards-tittle">Hora da capital</h3>

    <div className='hour-capital-area'>
        <div id='capital-name'>
            <div>Tokyo</div>
            <div>Brasília</div>
            <div>Washington</div>
            <div>Brussels</div>
        </div>

        <div id='hour-capital'>
            <div>hora</div>
            <div>
                {
                  `${hourBrasilia.toString().padStart('2', 0)}:
                  ${minutes.toString().padStart('2', 0)}:
                  ${seconds.toString().padStart('2', 0)}
               `}
            </div>
            <div>hora</div>
            <div>hora</div>
        </div>
    </div>
    </>
  )
}

export default HourCapital