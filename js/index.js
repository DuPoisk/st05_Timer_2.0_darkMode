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
  //novos elementos adicionados
  buttonLightMode, buttonDarkMode, colorBg, colorSpan,
  colorIconOutdoor, colorIconRaining, colorIconRestaurant, colorIconCamping,
  colorBgOutdoors, colorBgRaining, colorBgRestaurant, colorBgCamping,
  colorPlayButton, colorPauseButton, colorPauseButtonLeft, colorPauseButtonRight, colorStopButton, colorMinusButton, colorPlusButton,
  buttonOutdoorsHoverIcon, buttonOutdoorsHoverBg, //buttonOutdoorsHoverInput,
  buttonRainingHoverIcon, buttonRainingHoverBg, //buttonRainingHoverInput,
  buttonRestaurantHoverIcon, buttonRestaurantHoverBg, //buttonRestaurantHoverInput,
  buttonCampingHoverIcon, buttonCampingHoverBg, //buttonCampingHoverInput, 

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

buttonSet.addEventListener('click', function() {
  
    function getMinutes(){
      let newMinutes = prompt("Edit minutes:")
      
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
  //sounds~ and colors
buttonOutdoors.addEventListener('click', function() {
  sound.pressButtonOutdoors()  
  
  document.getElementById("volumeRaining").value = "50"
  document.getElementById("volumeRestaurant").value = "50"
  document.getElementById("volumeCamping").value = "50"
  
  if (buttonDarkMode.classList.contains("hide")){
    buttonOutdoorsHoverIcon.style.fill = "#FFFFFF"// light mode
    buttonOutdoorsHoverBg.style.background = "#02799D"
    //buttonOutdoorsHoverInput.style.fill = "#FFFFFF"
  
    buttonRainingHoverIcon.style.fill = "#323238"
    buttonRainingHoverBg.style.background = "#E1E1E6"
    buttonRestaurantHoverIcon.style.fill = "#323238"
    buttonRestaurantHoverBg.style.background = "#E1E1E6"
    buttonCampingHoverIcon.style.fill = "#323238"
    buttonCampingHoverBg.style.background = "#E1E1E6"
  }

  else if(buttonLightMode.classList.contains("hide")){
    buttonOutdoorsHoverIcon.style.fill = "#FFFFFF"//dark mode
    buttonOutdoorsHoverBg.style.background = "#0A3442"
    //buttonOutdoorsHoverInput.style.fill = "#FFFFF

    buttonRainingHoverIcon.style.fill = "#C4C4CC"
    buttonRainingHoverBg.style.background = "#29292E"
    buttonRestaurantHoverIcon.style.fill = "#C4C4CC"
    buttonRestaurantHoverBg.style.background = "#29292E"
    buttonCampingHoverIcon.style.fill = "#C4C4CC"
    buttonCampingHoverBg.style.background = "#29292E"
  }  
})


buttonRaining.addEventListener('click', function() {
  sound.pressButtonRaining() 

  document.getElementById("volumeOutdoors").value = "50"
  document.getElementById("volumeRestaurant").value = "50"
  document.getElementById("volumeCamping").value = "50"

  if (buttonDarkMode.classList.contains("hide")){
    buttonRainingHoverIcon.style.fill = "#FFFFFF"//light mode
    buttonRainingHoverBg.style.background = "#02799D"
    //buttonRainingHoverInput.style.fill = "#FFFFFF"
  
    buttonOutdoorsHoverIcon.style.fill = "#323238"
    buttonOutdoorsHoverBg.style.background = "#E1E1E6"
    buttonRestaurantHoverIcon.style.fill = "#323238"
    buttonRestaurantHoverBg.style.background = "#E1E1E6"
    buttonCampingHoverIcon.style.fill = "#323238"
    buttonCampingHoverBg.style.background = "#E1E1E6"
  }

  else if (buttonLightMode.classList.contains("hide")) { // dark mode
    buttonRainingHoverIcon.style.fill = "#FFFFFF"
    buttonRainingHoverBg.style.background = "#0A3442"
    //buttonRainingHoverInput.style.fill = "#FFFFFF"
    
    buttonOutdoorsHoverIcon.style.fill = "#C4C4CC"
    buttonOutdoorsHoverBg.style.background = "#29292E"
    buttonRestaurantHoverIcon.style.fill = "#C4C4CC"
    buttonRestaurantHoverBg.style.background = "#29292E"
    buttonCampingHoverIcon.style.fill = "#C4C4CC"
    buttonCampingHoverBg.style.background = "#29292E"
  }
})

buttonRestaurant.addEventListener('click', function() {
  sound.pressButtonRestaurant()

  document.getElementById("volumeOutdoors").value = "50"
  document.getElementById("volumeRaining").value = "50"
  document.getElementById("volumeCamping").value = "50"
  

  if (buttonDarkMode.classList.contains("hide")){
    buttonRestaurantHoverIcon.style.fill = "#FFFFFF"//light mode
    buttonRestaurantHoverBg.style.background = "#02799D"
   // buttonRestaurantHoverInput.style.fill = "#FFFFFF"
  
    buttonOutdoorsHoverIcon.style.fill = "#323238"
    buttonOutdoorsHoverBg.style.background = "#E1E1E6"  
    buttonRainingHoverIcon.style.fill = "#323238"
    buttonRainingHoverBg.style.background = "#E1E1E6"
    buttonCampingHoverIcon.style.fill = "#323238"
    buttonCampingHoverBg.style.background = "#E1E1E6"
  }

  else if (buttonLightMode.classList.contains("hide")) {
    buttonRestaurantHoverIcon.style.fill = "#FFFFFF" // dark mode
    buttonRestaurantHoverBg.style.background = "#0A3442"
   // buttonRestaurantHoverInput.style.fill = "#FFFFFF"

    buttonOutdoorsHoverIcon.style.fill = "#C4C4CC"
    buttonOutdoorsHoverBg.style.background = "#29292E"
    buttonRainingHoverIcon.style.fill = "#C4C4CC"
    buttonRainingHoverBg.style.background = "#29292E"
    buttonCampingHoverIcon.style.fill = "#C4C4CC"
    buttonCampingHoverBg.style.background = "#29292E"
  }
})

buttonCamping.addEventListener('click', function() {
  sound.pressButtonCamping() 

  document.getElementById("volumeOutdoors").value = "50"
  document.getElementById("volumeRaining").value = "50"
  document.getElementById("volumeRestaurant").value = "50"
  

  if (buttonDarkMode.classList.contains("hide")){
    buttonCampingHoverIcon.style.fill = "#FFFFFF"//light mode
    buttonCampingHoverBg.style.background = "#02799D"
    //buttonCampingHoverInput.style.fill = "#FFFFFF"
  
    buttonOutdoorsHoverIcon.style.fill = "#323238"
    buttonOutdoorsHoverBg.style.background = "#E1E1E6"  
    buttonRainingHoverIcon.style.fill = "#323238"
    buttonRainingHoverBg.style.background = "#E1E1E6"
    buttonRestaurantHoverIcon.style.fill = "#323238"
    buttonRestaurantHoverBg.style.background = "#E1E1E6"
  }

  else if (buttonLightMode.classList.contains("hide")){ // dark mode
    buttonCampingHoverIcon.style.fill = "#FFFFFF"
    buttonCampingHoverBg.style.background = "#0A3442"
    //buttonCampingHoverInput.style.fill = "#FFFFFF"
  
    buttonOutdoorsHoverIcon.style.fill = "#C4C4CC"
    buttonOutdoorsHoverBg.style.background = "#29292E"
    buttonRainingHoverIcon.style.fill = "#C4C4CC"
    buttonRainingHoverBg.style.background = "#29292E"
    buttonRestaurantHoverIcon.style.fill = "#C4C4CC"
    buttonRestaurantHoverBg.style.background = "#29292E"
  }
})


  //input range~ 
rangeOutdoors.addEventListener('click', function(){  
  var range = rangeOutdoors
  var value = volumeOutdoors
  document.getElementById("volumeRaining").value = "50"
  document.getElementById("volumeRestaurant").value = "50"
  document.getElementById("volumeCamping").value = "50"  
  console.log("teste")

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
  })
}) 


rangeRaining.addEventListener('click', function(){
  var range = rangeRaining
  var value = volumeRaining
  document.getElementById("volumeOutdoors").value = "50"
  document.getElementById("volumeRestaurant").value = "50"
  document.getElementById("volumeCamping").value = "50"

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
  })

})


rangeRestaurant.addEventListener('click', function(){
  var range = rangeRestaurant
  var value = volumeRestaurant
  document.getElementById("volumeOutdoors").value = "50"
  document.getElementById("volumeRaining").value = "50"
  document.getElementById("volumeCamping").value = "50"

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
    
  })

})


rangeCamping.addEventListener('click', function(){
  var range = rangeCamping
  var value = volumeCamping
  document.getElementById("volumeOutdoors").value = "50"
  document.getElementById("volumeRaining").value = "50"
  document.getElementById("volumeRestaurant").value = "50"

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
    
  })

})


//CHANGING COLORS - light mode and dark mode
buttonLightMode.addEventListener('click', function() { // CLICO PARA ATIVAR O MODO ESCURO
  buttonDarkMode.classList.remove("hide")
  buttonLightMode.classList.add("hide")
  
  colorBg.style.backgroundColor = "#121214"// background screen
  colorSpan.style.color = "#FFFFFF" // numeros

  colorIconOutdoor.style.fill = "#FFFFFF" //icones
  colorIconCamping.style.fill = "#FFFFFF" 
  colorIconRestaurant.style.fill = "#FFFFFF"
  colorIconRaining.style.fill = "#FFFFFF"  

  colorPlayButton.style.fill = "#C4C4CC" // setbuttons
  colorPauseButton.style.fill = "#C4C4CC"
  colorPauseButtonLeft.style.fill = "#C4C4CC"
  colorPauseButtonRight.style.fill = "#C4C4CC"
  colorStopButton.style.fill = "#C4C4CC"
  colorPlusButton.style.fill = "#C4C4CC"
  colorMinusButton.style.fill = "#C4C4CC" 

  colorBgOutdoors.style.backgroundColor = "#29292E" // background buttons
  colorBgRaining.style.backgroundColor = "#29292E"
  colorBgRestaurant.style.backgroundColor = "#29292E"
  colorBgCamping.style.backgroundColor = "#29292E"  
  
})


buttonDarkMode.addEventListener('click', function() { // CLICO PARA ATIVAR LIGHT MODE
  buttonDarkMode.classList.add("hide")
  buttonLightMode.classList.remove("hide")
  console.log(buttonDarkMode)
  
  colorBg.style.backgroundColor = "#FFFFFF"
  colorSpan.style.color = "#323238"  

  colorIconOutdoor.style.fill = "#323238"
  colorIconCamping.style.fill = "#323238"
  colorIconRestaurant.style.fill = "#323238"
  colorIconRaining.style.fill = "#323238" 

  colorPlayButton.style.fill = "#323238"
  colorPauseButton.style.fill = "#323238"
  colorPauseButtonLeft.style.fill = "#323238"
  colorPauseButtonRight.style.fill = "#323238"
  colorStopButton.style.fill = "#323238"
  colorPlusButton.style.fill = "#323238"
  colorMinusButton.style.fill = "#323238" 

  colorBgOutdoors.style.backgroundColor = "#E1E1E6"// background buttons
  colorBgRaining.style.backgroundColor = "#E1E1E6"
  colorBgRestaurant.style.backgroundColor = "#E1E1E6"
  colorBgCamping.style.backgroundColor = "#E1E1E6"  
})



