import { useEffect, useState } from "react"

export const Clock = () => {
  let intervalID:ReturnType<typeof setInterval>;
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPrecise, setIsPrecise] = useState(false);

  const beautifyTime = ():string => {
    let dateNow:string;
    let timeNow: string;
    if (isPrecise) {
      [dateNow, timeNow] = currentTime.toISOString().split('Z')[0].split('T')
    } else {
      dateNow = currentTime.toLocaleDateString().split(',')[0]
      timeNow = currentTime.toLocaleTimeString()
    }
    
    return `The current date: ${dateNow}.\nThe current time: ${timeNow}`
  }

  const updateClock = () => {
    
    const interval: number = isPrecise ? 200 : 1000;
    intervalID = setInterval(() => {
      setCurrentTime(new Date())
    }, interval)
  }

  useEffect(() => {
    return updateClock()
  }, [])

  return (
    <div>
      {beautifyTime()}
    </div>
  )
}