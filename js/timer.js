import Sounds from "./sounds.js"

export default function Timer (
  {
    minutesDisplay, 
    secondsDisplay, 
    //resetControls,
   // resetDisplay,
  }
){

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
/*
  function resetDisplay(){// antigo reset controls
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
    //minutesDisplay.textContent = "25"
    //secondsDisplay.textContent = "00"
    //resetTimer()
  } 
  */

  function reset(){
    updateDisplay(minutes,0)
    clearTimeout(timerTimeOut)
  }

  function updateDisplay(newMinutes, seconds){
    newMinutes = newMinutes === undefined ?  minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(minutes).padStart(2,"0")
    secondsDisplay.textContent = String(seconds).padStart(2,"0")
  }

  function countDown() {
    timerTimeOut = setTimeout(function(){
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      

      updateDisplay(minutes, 0)
     // console.log(minutes)

      if (minutes <= 0 && seconds <= 0) {// Is Finished
        //resetControls()
        buttonPlay.classList.remove("hide")
        buttonPause.classList.add("hide")

        updateDisplay()
        Sounds().timeIsFinished()
        return
      }

      if (seconds <= 0){
        seconds = 3
        --minutes // contagem regressiva dos minutos
        
      }
      
      updateDisplay(minutes, String(seconds - 1))
      
      console.log(minutes, seconds)
      countDown()
    }, 1000)
  }

  function updateMinutes(newMinutes){
    minutes = newMinutes    
  }

  function hold(){
    clearTimeout(timerTimeOut)    
  }

  return {
    countDown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  }
}


