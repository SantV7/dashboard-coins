import { useEffect, useState } from 'react'
import '../hourCapital/hour-capital.css'

const HourCapital = () => {

    const [hourBrasilia, setHourBrasilia] = useState(new Date().getHours())
    const [hourTokyo, setTokyo] = useState(new Date().getHours())
    const [hourWashington, setHourWashington] = useState(new Date().getHours())
    const [hourBrussels, setHourBrussels] = useState(new Date().getHours())

    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())      
    

    useEffect(() => {
        const interval = setInterval(() => {
            const nowGetTime = new Date()

            setHourBrasilia((nowGetTime.getUTCHours() - 3 + 24) % 24 )
            setTokyo((nowGetTime.getUTCHours() + 9) % 24) 
            setHourWashington((nowGetTime.getUTCHours() + 1) % 24)
            setHourBrussels((nowGetTime.getUTCHours() + 1) % 24)

            setMinutes(nowGetTime.getMinutes())
            setSeconds(nowGetTime.getSeconds())
        }, 1000)

        return () => clearInterval(interval)
    },[])



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
            <div>
                {
                 `${hourTokyo.toString().padStart('2', 0)}:
                  ${minutes.toString().padStart('2', 0)}:
                  ${seconds.toString().padStart('2', 0)}h
               `}                
            </div>

            <div>
                {
                 `${hourBrasilia.toString().padStart('2', 0)}:
                  ${minutes.toString().padStart('2', 0)}:
                  ${seconds.toString().padStart('2', 0)}h
               `}
            </div>

            <div>
                {
                 `${hourWashington.toString().padStart('2', 0)}:
                  ${minutes.toString().padStart('2', 0)}:
                  ${seconds.toString().padStart('2', 0)}h
               `}               
            </div>

            <div>
                {
                 `${hourBrussels.toString().padStart('2', 0)}:
                  ${minutes.toString().padStart('2', 0)}:
                  ${seconds.toString().padStart('2', 0)}h
               `}               
            </div>
        </div>
    </div>
    </>
  )
}

export default HourCapital