//default import
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
  rangeOutdoors,  rangeRaining,  rangeRestaurant,  rangeCamping,
  volumeOutdoors,  volumeRaining,  volumeRestaurant,  volumeCamping, 

 } from "./elements.js"

const timer = Timer({
  minutesDisplay, //shorthand
  secondsDisplay,   
})

const sound = Sound ()
  

//BUTTONS: CONFIG
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
      
      if (!newMinutes){ //testar se minutes = undefined, null ou zero
        return false // pega os minutos ou me retorna falso
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

buttonMinus.addEventListener('click', function() {
  sound.pressButton()
  let minutes = Number(minutesDisplay.textContent)
  

  function minusPress (){    
    if (minutes >= 5){
      minutesDisplay.textContent = String(minutes - 5).padStart(2,"0" )
      return
    }

    if (minutes <= 5){
      minutesDisplay.textContent = String(0).padStart(2,"0" )
      return
    }
  }
  minusPress()
})

buttonPlus.addEventListener('click', function() {
  sound.pressButton()
  let minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes + 5).padStart(2,"0" )
 
})
  


//BUTTONS: SOUND AND INPUT RANGE
  //sounds~
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

  //input range~
rangeOutdoors.addEventListener('click', function(){
  var range = rangeOutdoors
  var value = volumeOutdoors
  document.getElementById("volumeRaining").value = "50";
  document.getElementById("volumeRestaurant").value = "50";
  document.getElementById("volumeCamping").value = "50";  

  range.addEventListener('input', function() {
    
    value.textContent = Number(this.value)
    console.log(this.value)
    
  
    if (value.textContent < 50){
      console.log("é zero")
      sound.buttonBgOutdoors.volume = 0.0
    }

    else if (value.textContent > 99){ // não funcionando com "= 100"
      console.log("é cem")
      sound.buttonBgOutdoors.volume = 1.0
    }

    else if (value.textContent = 50){
      console.log("é cinquenta")
      sound.buttonBgOutdoors.volume = 0.5
    }
    
  });

})


rangeRaining.addEventListener('click', function(){
  var range = rangeRaining
  var value = volumeRaining
  document.getElementById("volumeOutdoors").value = "50";
  document.getElementById("volumeRestaurant").value = "50";
  document.getElementById("volumeCamping").value = "50";

  range.addEventListener('input', function() {
    
    value.textContent = Number(this.value)
    console.log(this.value)
    

    if (value.textContent < 50){
      console.log("é zero")
      sound.buttonBgRaining.volume = 0
    }

    else if (value.textContent > 99){ // não funcionando com "= 100"
      console.log("é cem")
      sound.buttonBgRaining.volume = 1
    }

    else if (value.textContent = 50){
      console.log("é cinquenta")
      sound.buttonBgRaining.volume = 0.5
    }
    
  });

})


rangeRestaurant.addEventListener('click', function(){
  var range = rangeRestaurant
  var value = volumeRestaurant
  document.getElementById("volumeOutdoors").value = "50";
  document.getElementById("volumeRaining").value = "50";
  document.getElementById("volumeCamping").value = "50";

  range.addEventListener('input', function() {
    
    value.textContent = Number(this.value)
    console.log(this.value)
    

    if (value.textContent < 50){
      console.log("é zero")
      sound.buttonBgRestaurant.volume = 0
    }

    else if (value.textContent > 99){ // não funcionando com "= 100"
      console.log("é cem")
      sound.buttonBgRestaurant.volume = 1
    }

    else if (value.textContent = 50){
      console.log("é cinquenta")
      sound.buttonBgRestaurant.volume = 0.5
    }
    
  });

})


rangeCamping.addEventListener('click', function(){
  var range = rangeCamping
  var value = volumeCamping
  document.getElementById("volumeOutdoors").value = "50";
  document.getElementById("volumeRaining").value = "50";
  document.getElementById("volumeRestaurant").value = "50";

  range.addEventListener('input', function() {
    
    value.textContent = Number(this.value)
    console.log(this.value)
    

    if (value.textContent < 50){
      console.log("é zero")
      sound.buttonBgCamping.volume = 0
    }

    else if (value.textContent > 99){ // não funcionando com "= 100"
      console.log("é cem")
      sound.buttonBgCamping.volume = 1
    }

    else if (value.textContent = 50){
      console.log("é cinquenta")
      sound.buttonBgCamping.volume = 0.5
    }
    
  });

})

/*

fazer funcionalidade da mudança de cor*/