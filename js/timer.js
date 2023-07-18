import Sounds from "./sounds.js"
import {
  buttonPlay,
  buttonPause,  
} from "./elements.js"

export default function Timer (
  {
    minutesDisplay, 
    secondsDisplay, 
  }
){

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function reset(){ // para usar no botão STOP
    updateDisplay(minutes,0)
    clearTimeout(timerTimeOut)// para apagar o número que a função
    //timerTimeOut me devolve e assim parar de executá-la.
  }

  function updateDisplay (newMinutes,seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes// chama-se ternário e funciona como um if
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2,"0" )//aqui estava o erro em String(minutes) ao invés de (String(newMinutes))
    secondsDisplay.textContent = String(seconds).padStart(2,"0" )
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
        return // para de executar
      }

      if (seconds <= 0){
        seconds = 3
        --minutes // contagem regressiva dos minutos
        
      }
      
      updateDisplay(minutes, String(seconds - 1)) // contagem regressiva dos segundos
      
      
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


