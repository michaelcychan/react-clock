import React, { useEffect, useState } from "react"

export const Clock = (props: { isPrecise: boolean; }) => {
  let intervalID:ReturnType<typeof setInterval>;
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
    intervalID = setInterval(() => {
      setCurrentTime(new Date())
    }, interval)
  }

  const cancelClock = () => {
    clearInterval(intervalID)
  }

  useEffect(() => {
    setIsPrecise(props.isPrecise);
    updateClock();
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