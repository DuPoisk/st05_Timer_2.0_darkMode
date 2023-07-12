//default import
import Controls from "./controls.js"
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

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet, 
  buttonStop,
  
})

const timer = Timer({
  minutesDisplay, //shorthand
  secondsDisplay, 
  resetControls: controls.reset, 
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

  function getMinutes(){
    let newMinutes = prompt("Quantos minutos?") 
    if (!newMinutes){
      return false
    }

   return newMinutes
  }


  buttonSet.addEventListener('click', function(){
    let newMinutes = getMinutes() 

    timer.updateDisplay(newMinutes,0)
    timer.updateMinutes(newMinutes)
  })





  buttonMinus.addEventListener('click', function() {
    console.log("menos é mais")
  })
  // buttonPlus.addEventListener('click', function() {})

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

//criar isso nos elementos e linkar com html
//fazer funcionalidade do +-
//fazer funcionalidade do som de fundo mais as mudança de cor
