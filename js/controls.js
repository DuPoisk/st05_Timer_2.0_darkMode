
export default function Controls(
  buttonPlay,
  buttonPause, 
  
){

  function play () {
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
  }

  function pause(){
    buttonPause.classList.toggle("hide")
    buttonPlay.classList.toggle("hide")
  }

  function getMinutes(){
    let newMinutes = prompt("Quantos minutos?") 
    if (!newMinutes){
      return false
    }

   return newMinutes

  }

  function reset(){
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
    //minutesDisplay.textContent = "25"
    //secondsDisplay.textContent = "00"
    //resetTimer()
  } 

  return {
    reset,
    play,
    pause,
    getMinutes,    
  }
}

