
const buttonSet = document.querySelector('.numbers span') // so aparece se clicar nos minutos e nao nos segundos. sem o span funciona se apertar nos segundos
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')

const buttonMinus = document.querySelector('.minus')
const buttonPlus = document.querySelector('.plus')

const buttonOutdoors = document.querySelector('.outdoors')
const buttonRaining = document.querySelector('.raining')
const buttonRestaurant = document.querySelector('.restaurant')
const buttonCamping = document.querySelector('.camping')


export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonMinus,
  buttonPlus,
  minutesDisplay,
  secondsDisplay,
  buttonOutdoors,  
  buttonRaining,
  buttonRestaurant,
  buttonCamping,
}