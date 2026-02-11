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



            if(newHourTokyo >= Number(12) && newHourTokyo <= Number(17)) {
                setTimeDefaultTokyo('Tarde')
            } else if (newHourTokyo >= Number(18) && newHourTokyo <= Number(24)) {
                setTimeDefaultTokyo('Noite')
            } else if (newHourTokyo >= Number(1) && newHourTokyo <= Number(5)) {
                setTimeDefaultTokyo('Madrugada')
            } else {
                setTimeDefaultTokyo('Manhã')
            }


            if(newHourBrasilia >= Number(12) && newHourBrasilia <= Number(17)) {
                setTimeDefaultBrasilia('Tarde')
            } else if (newHourBrasilia >= Number(18) && newHourBrasilia <= Number(24)) {
                setTimeDefaultBrasilia('Noite')
            } else if (newHourBrasilia >= Number(1) && newHourBrasilia <= Number(5)) {
                setTimeDefaultBrasilia('Madrugada')
            } else {
                setTimeDefaultBrasilia('Manhã')
            }


            if(newHourWashington >= Number(12) && newHourWashington <= Number(17)) {
                setTimeDefaultWashington('Tarde')
            } else if (newHourWashington >= Number(18) && newHourWashington <= Number(24)) {
                setTimeDefaultWashington('Noite')
            } else if (newHourWashington >= Number(1) && newHourWashington <= Number(5)) {
                setTimeDefaultWashington('Madrugada')
            } else {
                setTimeDefaultWashington('Manhã')
            }


            if(newHourBrussels >= Number(12) && newHourBrussels <= Number(17)) {
                setTimeDefaultBrussels('Tarde')
            } else if (newHourBrussels >= Number(18) && newHourBrussels <= Number(24)) {
                setTimeDefaultBrussels('Noite')
            } else if (newHourBrussels >= Number(1) && newHourBrussels <= Number(5)) {
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
            <div className='name'>Tokyo <div>-</div> <div>{timeDefaultTokyo}</div></div>
            <div className='name'>Brasília <div>-</div> <div>{timeDefaultBrasilia}</div></div>
            <div className='name'>Washington <div>-</div> <div>{timeDefaultWashington}</div></div>
            <div className='name'>Brussels <div>-</div> <div>{timeDefaultBrussels}</div></div>
        </div>

        <div id='hour-capital'>
            <div className='time-to-capital'>
                {
                 `${hourTokyo.toString().padStart('2', 0)}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart('2', 0)}h
               `}                
            </div>

            <div className='time-to-capital'>
                {
                 `${hourBrasilia.toString().padStart('2', 0)}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart('2', 0)}h
               `}
            </div>

            <div className='time-to-capital'>
                {
                 `${hourWashington.toString().padStart('2', 0)}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart('2', 0)}h
               `}               
            </div>

            <div className='time-to-capital'>
                {
                 `${hourBrussels.toString().padStart('2', 0)}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart('2', 0)}h
               `}               
            </div>
        </div>
    </div>
    </>
  )
}

export default HourCapital