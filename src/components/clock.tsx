import React, { useEffect, useState } from "react"

export const Clock = (props: { isPrecise: boolean; }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPrecise, setIsPrecise] = useState(props.isPrecise);

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
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, interval)
    return intervalId
  }

  useEffect(() => {
    setIsPrecise(props.isPrecise);
    const intervalId = updateClock();
    return () => {
      clearInterval(intervalId)
    }
  },[props.isPrecise])

  useEffect(() => {
    updateClock();
  },[])

  return (
    <div>
      {beautifyTime()}
    </div>
  )
}