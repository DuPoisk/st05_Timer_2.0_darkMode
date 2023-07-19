// import {
//    buttonOutdoors,
//    buttonRaining,
//    buttonRestaurant,
//    buttonCamping,
//  } from "./elements.js"

//import { volumeOutdoors } from "./elements"

export default function () {
  const buttonBgOutdoors = new Audio("./assets/sounds/Floresta.mp3")
  const buttonBgRaining = new Audio("./assets/sounds/Chuva.mp3")
  const buttonBgRestaurant = new Audio("./assets/sounds/Cafeteria.mp3")
  const buttonBgCamping = new Audio("./assets/sounds/Lareira.mp3")


  // amostra
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  //const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  //bgAudio.loop = true
  buttonBgOutdoors.loop = true
  buttonBgRaining.loop = true
  buttonBgRestaurant.loop = true
  buttonBgCamping.loop = true
  
  buttonBgOutdoors.volume = 0.5
  buttonBgRaining.volume = 0.5
  buttonBgRestaurant.volume = 0.5
  buttonBgCamping.volume = 0.5
   

  function pressButton(){
    buttonPressAudio.play()
  } 

  function bgAudioStart(){
    bgAudio.play()
  }

  function pressButtonOutdoors(){
    buttonBgOutdoors.play()

    buttonBgRaining.pause()
    buttonBgRestaurant.pause()
    buttonBgCamping.pause()
  }
  
  function pressButtonRaining(){
    buttonBgRaining.play()

    buttonBgOutdoors.pause()
    buttonBgRestaurant.pause()
    buttonBgCamping.pause()
  }

  function pressButtonRestaurant(){
    buttonBgRestaurant.play()

    buttonBgOutdoors.pause()
    buttonBgRaining.pause()   
    buttonBgCamping.pause()
  }

  function pressButtonCamping(){
    buttonBgCamping.play()

    buttonBgOutdoors.pause()
    buttonBgRaining.pause()
    buttonBgRestaurant.pause()
    
  }

  function timeIsFinished() {    
    kitchenTimer.play()   
  }

  return {
    buttonPressAudio,
    kitchenTimer,
    //bgAudio,  
    pressButton,
    timeIsFinished,
    bgAudioStart,   
    pressButtonOutdoors,
    pressButtonRaining,
    pressButtonRestaurant,
    pressButtonCamping,
    buttonBgOutdoors,
    buttonBgRaining,
    buttonBgRestaurant,
    buttonBgCamping,
  }
}
