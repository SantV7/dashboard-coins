import { useEffect, useState } from 'react'
import '../hourCapital/hour-capital.css'

const HourCapital = () => {

    const [hourBrasilia, setHourBrasilia] = useState((new Date().getUTCHours() - 3 + 24) % 24)
    const [hourTokyo, setTokyo] = useState((new Date().getUTCHours() + 9 + 24) % 24)
    const [hourWashington, setHourWashington] = useState((new Date().getUTCHours() - 5 + 24) % 24)
    const [hourBrussels, setHourBrussels] = useState((new Date().getUTCHours() + 1 + 24) % 24)

    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())      
    

    useEffect(() => {
        const interval = setInterval(() => {
            const nowGetTime = new Date()

            setHourBrasilia((nowGetTime.getUTCHours() - 3 + 24) % 24 )
            setTokyo((nowGetTime.getUTCHours() + 9 + 24) % 24) 
            setHourWashington((nowGetTime.getUTCHours() - 5 + 24) % 24)
            setHourBrussels((nowGetTime.getUTCHours() + 1 + 24) % 24)

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
            <div className='name'>Tokyo</div>
            <div className='name'>Brasília</div>
            <div className='name'>Washington</div>
            <div className='name'>Brussels</div>
        </div>

        <div id='hour-capital'>
            <div className='time-to-capital'>
                {
                 `${hourTokyo.toString().padStart('2', 0)}:${minutes.toString().padStart('2', 0)}:${seconds.toString().padStart('2', 0)}h
               `}                
            </div>

            <div className='time-to-capital'>
                {
                 `${hourBrasilia.toString().padStart('2', 0)}:${minutes.toString().padStart('2', 0)}:${seconds.toString().padStart('2', 0)}h
               `}
            </div>

            <div className='time-to-capital'>
                {
                 `${hourWashington.toString().padStart('2', 0)}:${minutes.toString().padStart('2', 0)}:${seconds.toString().padStart('2', 0)}h
               `}               
            </div>

            <div className='time-to-capital'>
                {
                 `${hourBrussels.toString().padStart('2', 0)}:${minutes.toString().padStart('2', 0)}:${seconds.toString().padStart('2', 0)}h
               `}               
            </div>
        </div>
    </div>
    </>
  )
}

export default HourCapital