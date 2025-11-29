let Digital = document.querySelector(".container")

function Clock(){

  let time = new Date()
  let hour = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()

  let AMPM = hour>=12 ? "PM":"AM"
  hour = hour%12
  hour = hour ? hour:12
  hour = hour<10 ? "0"+hour:hour
  minutes = minutes<10 ? "0"+minutes:minutes
  seconds = seconds<10 ? "0"+seconds:seconds
  Digital.innerHTML=`${hour}:${minutes}:${seconds} ${AMPM}`
}
setInterval(Clock,1000)
Clock()