//default import
//import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonMinus,
  buttonPlus,
  buttonOutdoors,
  buttonRaining,
  buttonRestaurant,
  buttonCamping,
  minutesDisplay,
  secondsDisplay,
 } from "./elements.js"

//const controls = Controls({
  //buttonPlay,
  //buttonPause, 
//})

const timer = Timer({
  minutesDisplay, //shorthand
  secondsDisplay, 
  //resetControls: timer.reset, 
})

const sound = Sound ()
  

//BUTTONS
buttonPlay.addEventListener('click', function() { // depois do click executa a função
    //controls.play()
    buttonPlay.classList.toggle("hide")
    buttonPause.classList.toggle("hide")
    
    timer.countDown()
    sound.pressButton()
  })

buttonPause.addEventListener('click', function() {
    //controls.pause()
    buttonPause.classList.toggle("hide")
    buttonPlay.classList.toggle("hide")

    timer.hold()
    sound.pressButton()
    
  })

buttonStop.addEventListener('click', function() {
    //controls.reset()
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")

    timer.reset()
    sound.pressButton()
  })


buttonSet.addEventListener('click', function(){
  function getMinutes(){
      let newMinutes = prompt("Quantos minutos?")
       
      if (!newMinutes){
        return false
      }
  
     return newMinutes
  
  }

  let newMinutes = getMinutes()
  
  if(!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})



  /*buttonMinus.addEventListener('click', function() {
    sound.pressButton()
    minusPress()

    function minusPress (){
      let minutes = Number(minutesDisplay.textContent)
      if (minutes >= 5){
        minutes = minutes - 5
        return
      }


    }
  })
  */


  /* buttonPlus.addEventListener('click', function() {
      sound.pressButton()
  })*/

  buttonOutdoors.addEventListener('click', function() {
    sound.pressButtonOutdoors()    
   })

  buttonRaining.addEventListener('click', function() {
    sound.pressButtonRaining()
  })

  buttonRestaurant.addEventListener('click', function() {
    sound.pressButtonRestaurant()
  })

  buttonCamping.addEventListener('click', function() {
    sound.pressButtonCamping()
  })

//fazer funcionalidade do +-
//fazer funcionalidade do botao
//fazer funcionalidade da mudança de cor
