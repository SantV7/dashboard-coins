import { useEffect, useState } from 'react'
import '../hourCapital/hour-capital.css'

const HourCapital = () => {

    const [hourBrasilia, setHourBrasilia] = useState((new Date().getUTCHours() - 3 + 24) % 24)
    const [hourTokyo, setHourTokyo] = useState((new Date().getUTCHours() + 9 + 24) % 24)
    const [hourWashington, setHourWashington] = useState((new Date().getUTCHours() - 5 + 24) % 24)
    const [hourBrussels, setHourBrussels] = useState((new Date().getUTCHours() + 1 + 24) % 24)

    const [timeDefaultTokyo, setTimeDefaultTokyo] = useState('')
    
    const [timeDefaultBrasilia, setTimeDefaultBrasilia] = useState('')

    const [timeDefaultWashington, setTimeDefaultWashington] = useState('')

    const [timeDefaultBrussels, setTimeDefaultBrussels] = useState('')

    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())      
    

    useEffect(() => {
        const interval = setInterval(() => {
            const nowGetTime = new Date()

            setHourBrasilia((nowGetTime.getUTCHours() - 3 + 24) % 24 )

            setHourTokyo((nowGetTime.getUTCHours() + 9 + 24) % 24) 

            setHourWashington((nowGetTime.getUTCHours() - 5 + 24) % 24)

            setHourBrussels((nowGetTime.getUTCHours() + 1 + 24) % 24)

            setMinutes(nowGetTime.getMinutes())

            setSeconds(nowGetTime.getSeconds())
        }, 1000)

        let newHourTokyo = hourTokyo
        let newHourBrasilia = hourBrasilia
        let newHourWashington = hourWashington
        let newHourBrussels = hourBrussels


            if(newHourTokyo >= 12 && newHourTokyo <= 17) {
                setTimeDefaultTokyo('Tarde')
            } else if (newHourTokyo >= 18 && newHourTokyo <= 24) {
                setTimeDefaultTokyo('Noite')
            } else if (newHourTokyo >= 1 && newHourTokyo <= 5) {
                setTimeDefaultTokyo('Madrugada')
            } else {
                setTimeDefaultTokyo('Manhã')
            }


            if(newHourBrasilia >= 12 && newHourBrasilia <= 17) {
                setTimeDefaultBrasilia('Tarde')
            } else if (newHourBrasilia >= 18 && newHourBrasilia <= 24) {
                setTimeDefaultBrasilia('Noite')
            } else if (newHourBrasilia >= 1 && newHourBrasilia <= 5) {
                setTimeDefaultBrasilia('Madrugada')
            } else {
                setTimeDefaultBrasilia('Manhã')
            }


            if(newHourWashington >= 12 && newHourWashington <= 17) {
                setTimeDefaultWashington('Tarde')
            } else if (newHourWashington >= 18 && newHourWashington <= 24) {
                setTimeDefaultWashington('Noite')
            } else if (newHourWashington >= 1 && newHourWashington <= 5) {
                setTimeDefaultWashington('Madrugada')
            } else {
                setTimeDefaultWashington('Manhã')
            }


            if(newHourBrussels >= 12 && newHourBrussels <= 17) {
                setTimeDefaultBrussels('Tarde')
            } else if (newHourBrussels >= 18 && newHourBrussels <= 24) {
                setTimeDefaultBrussels('Noite')
            } else if (newHourBrussels >= 1 && newHourBrussels <= 5) {
                setTimeDefaultBrussels('Madrugada')
            } else {
                setTimeDefaultBrussels('Manhã')
            }            

        return () => clearInterval(interval)
    },[])
    


  return (
    <>
     <h3 className="cards-tittle">Hora da capital</h3>
    <div className='hour-capital-area'>
        <div id='capital-name'>
            <div className='name'>Tokyo - {timeDefaultTokyo}</div>
            <div className='name'>Brasília - {timeDefaultBrasilia}</div>
            <div className='name'>Washington - {timeDefaultWashington}</div>
            <div className='name'>Brussels - {timeDefaultBrussels}</div>
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