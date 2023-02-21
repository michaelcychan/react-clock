import { useEffect, useState } from 'react';
import '../App.css'

export const AnalogClock = () => {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [secondAngle, setSecondAngle] = useState<string>('');
  const [minuteAngle, setMinuteAngle] = useState<string>('');
  const [hourAngle, setHourAngle] = useState<string>('');

  const updateClock = () => {
    setInterval(()=> {
      setCurrentTime(new Date())
    }, 1000)
  }

  useEffect(() => {
    updateClock()
  }, [])

  const updateAngles = () => {
    const [hour, minute, second] = currentTime.toLocaleTimeString('en-GB').split(':');
    const sAngle:number = Number(second) * 6;
    const mAngle:number = Number(minute) * 6 + sAngle / 60;
    const hAngle:number = Number(hour) * 30  + mAngle / 60;

    setSecondAngle('rotate(' + sAngle.toString() + 'deg)');
    setMinuteAngle('rotate(' + mAngle.toString() + 'deg)');
    setHourAngle('rotate(' + hAngle.toString()+'deg)');
  }

  useEffect(()=> {
    updateAngles()
  }, [currentTime])

  return(
    <span className="circle">
      <span className="center-point" />
      <span className="clock-hand second-hand" style={{transform:secondAngle}} />
      <span className="clock-hand minute-hand" style={{transform:minuteAngle}} />
      <span className="clock-hand hour-hand" style={{transform:hourAngle}} />
    </span>
  )
}
