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
  
const buttonOutdoorsHoverIcon = document.querySelector('.outdoors svg path')
const buttonOutdoorsHoverBg = document.querySelector('.outdoors')
const buttonOutdoorsHoverInput = document.querySelector('.outdoors input')

const buttonRainingHoverIcon = document.querySelector('.raining svg path')
const buttonRainingHoverBg = document.querySelector('.raining')
const buttonRainingHoverInput = document.querySelector('.raining input') 

const buttonRestaurantHoverIcon = document.querySelector('.restaurant svg path')
const buttonRestaurantHoverBg = document.querySelector('.restaurant')
const buttonRestaurantHoverInput = document.querySelector('.restaurant input') 

const buttonCampingHoverIcon = document.querySelector('.camping svg path')
const buttonCampingHoverBg = document.querySelector('.camping')
const buttonCampingHoverInput = document.querySelector('.camping input')

 

//BUTTONS: SOUND AND INPUT RANGE
  //sounds~ and colors
buttonOutdoors.addEventListener('click', function() {
  sound.pressButtonOutdoors()  

  document.getElementById("volumeRaining").value = "50";
  document.getElementById("volumeRestaurant").value = "50";
  document.getElementById("volumeCamping").value = "50";  

  buttonOutdoorsHoverIcon.style.fill = "#FFFFFF"
  buttonOutdoorsHoverBg.style.background = "#02799D"
  //buttonOutdoorsHoverInput.style.fill = "#FFFFFF"

  buttonRainingHoverIcon.style.fill = "#323238"
  buttonRainingHoverBg.style.background = "#E1E1E6"
  buttonRestaurantHoverIcon.style.fill = "#323238"
  buttonRestaurantHoverBg.style.background = "#E1E1E6"
  buttonCampingHoverIcon.style.fill = "#323238"
  buttonCampingHoverBg.style.background = "#E1E1E6"
})

buttonRaining.addEventListener('click', function() {
  sound.pressButtonRaining() 

  document.getElementById("volumeOutdoors").value = "50";
  document.getElementById("volumeRestaurant").value = "50";
  document.getElementById("volumeCamping").value = "50";

  buttonRainingHoverIcon.style.fill = "#FFFFFF"
  buttonRainingHoverBg.style.background = "#02799D"
  //buttonRainingHoverInput.style.fill = "#FFFFFF"

  buttonOutdoorsHoverIcon.style.fill = "#323238"
  buttonOutdoorsHoverBg.style.background = "#E1E1E6"
  buttonRestaurantHoverIcon.style.fill = "#323238"
  buttonRestaurantHoverBg.style.background = "#E1E1E6"
  buttonCampingHoverIcon.style.fill = "#323238"
  buttonCampingHoverBg.style.background = "#E1E1E6"
})

buttonRestaurant.addEventListener('click', function() {
  sound.pressButtonRestaurant()

  document.getElementById("volumeOutdoors").value = "50";
  document.getElementById("volumeRaining").value = "50";
  document.getElementById("volumeCamping").value = "50";

  buttonRestaurantHoverIcon.style.fill = "#FFFFFF"
  buttonRestaurantHoverBg.style.background = "#02799D"
 // buttonRestaurantHoverInput.style.fill = "#FFFFFF"

  buttonOutdoorsHoverIcon.style.fill = "#323238"
  buttonOutdoorsHoverBg.style.background = "#E1E1E6"  
  buttonRainingHoverIcon.style.fill = "#323238"
  buttonRainingHoverBg.style.background = "#E1E1E6"
  buttonCampingHoverIcon.style.fill = "#323238"
  buttonCampingHoverBg.style.background = "#E1E1E6"
})

buttonCamping.addEventListener('click', function() {
  sound.pressButtonCamping() 

  document.getElementById("volumeOutdoors").value = "50";
  document.getElementById("volumeRaining").value = "50";
  document.getElementById("volumeRestaurant").value = "50";

  buttonCampingHoverIcon.style.fill = "#FFFFFF"
  buttonCampingHoverBg.style.background = "#02799D"
  //buttonCampingHoverInput.style.fill = "#FFFFFF"

  buttonOutdoorsHoverIcon.style.fill = "#323238"
  buttonOutdoorsHoverBg.style.background = "#E1E1E6"  
  buttonRainingHoverIcon.style.fill = "#323238"
  buttonRainingHoverBg.style.background = "#E1E1E6"
  buttonRestaurantHoverIcon.style.fill = "#323238"
  buttonRestaurantHoverBg.style.background = "#E1E1E6"
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

//CHANGING COLORS - light mode and dark mode
const buttonLightMode = document.querySelector('.lightMode')
const buttonDarkMode = document.querySelector('.darkMode')
const colorBg = document.querySelector('.container')
const colorSpan = document.querySelector('.numbers')

const colorIconOutdoor = document.querySelector('.outdoors path') 
const colorIconRaining = document.querySelector('.raining path') 
const colorIconRestaurant = document.querySelector('.restaurant path') 
const colorIconCamping = document.querySelector('.camping path') 

const colorBgOutdoors = document.querySelector('.outdoors')
const colorBgRaining = document.querySelector('.raining')
const colorBgRestaurant = document.querySelector('.restaurant')
const colorBgCamping = document.querySelector('.camping')

const colorPlayButton = document.querySelector('#buttonIcons path:nth-child(1)')
const colorPauseButton = document.querySelector('.pause path')
const colorPauseButtonLeft = document.getElementById('path2')
const colorPauseButtonRight = document.getElementById('path3')
const colorStopButton = document.querySelector('.stop path')
const colorMinusButton = document.querySelector('.minus path')
const colorPlusButton = document.querySelector('.plus path')


function changeToDarkMode(){
  colorBg.style.backgroundColor = "#121214";
  colorSpan.style.color = "#FFFFFF";
  
  colorIconOutdoor.style.fill = "#FFFFFF";
  colorIconCamping.style.fill = "#FFFFFF" ;
  colorIconRestaurant.style.fill = "#FFFFFF";
  colorIconRaining.style.fill = "#FFFFFF";

  colorPlayButton.style.fill = "#C4C4CC";
  colorPauseButton.style.fill = "#C4C4CC";
  colorPauseButtonLeft.style.fill = "#C4C4CC";
  colorPauseButtonRight.style.fill = "#C4C4CC";
  colorStopButton.style.fill = "#C4C4CC";
  colorPlusButton.style.fill = "#C4C4CC";
  colorMinusButton.style.fill = "#C4C4CC"; 

  while(buttonLightMode.onclick = true){
    colorBgOutdoors.style.backgroundColor = "#29292E";
    colorBgRaining.style.backgroundColor = "#29292E";
    colorBgRestaurant.style.backgroundColor = "#29292E";
    colorBgCamping.style.backgroundColor = "#29292E";
    if(buttonOutdoors.onclick = true){
      console.log("hello");
    }
  }
}


function changeToLightMode(){  
  colorBg.style.backgroundColor = "#FFFFFF";
  colorSpan.style.color = "#323238";

  colorIconOutdoor.style.fill = "#323238";
  colorIconCamping.style.fill = "#323238";
  colorIconRestaurant.style.fill = "#323238";
  colorIconRaining.style.fill = "#323238";

  colorPlayButton.style.fill = "#323238";
  colorPauseButton.style.fill = "#323238";
  colorPauseButtonLeft.style.fill = "#323238";
  colorPauseButtonRight.style.fill = "#323238";
  colorStopButton.style.fill = "#323238";
  colorPlusButton.style.fill = "#323238";
  colorMinusButton.style.fill = "#323238";  
}






buttonLightMode.addEventListener('click', function() { 
  buttonDarkMode.classList.toggle("hide")
  buttonLightMode.classList.toggle("hide")
  changeToDarkMode()
})

buttonDarkMode.addEventListener('click', function() { 
  buttonDarkMode.classList.toggle("hide")
  buttonLightMode.classList.toggle("hide")
  changeToLightMode()

  // buttonOutdoorsHoverIcon.style.fill = "#FFFFFF"
  // buttonOutdoorsHoverBg.style.background = "#02799D"
  

  // buttonRainingHoverIcon.style.fill = "#323238"
  // buttonRainingHoverBg.style.background = "#E1E1E6"
})
