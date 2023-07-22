
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

var rangeOutdoors = document.querySelector('.outdoors input')
var volumeOutdoors = document.querySelector('.outdoors span')
var rangeRaining = document.querySelector('.raining input')
var volumeRaining = document.querySelector('.raining span')
var rangeRestaurant = document.querySelector('.restaurant input')
var volumeRestaurant = document.querySelector('.restaurant span')
var rangeCamping = document.querySelector('.camping input')
var volumeCamping = document.querySelector('.camping span')


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

//hover soundButton color change
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


export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonMinus,
  buttonPlus,
  minutesDisplay,  secondsDisplay,
  buttonOutdoors,    buttonRaining,  buttonRestaurant,  buttonCamping,
  rangeOutdoors,  rangeRaining,  rangeRestaurant,  rangeCamping,
  volumeOutdoors,  volumeRaining,  volumeRestaurant,  volumeCamping, 
  //novos elementos
  buttonLightMode, buttonDarkMode, colorBg, colorSpan,
  colorIconOutdoor, colorIconRaining, colorIconRestaurant, colorIconCamping,
  colorBgOutdoors, colorBgRaining, colorBgRestaurant, colorBgCamping,
  colorPlayButton, colorPauseButton, colorPauseButtonLeft, colorPauseButtonRight, colorStopButton, colorMinusButton, colorPlusButton,
  buttonOutdoorsHoverIcon, buttonOutdoorsHoverBg, //buttonOutdoorsHoverInput,
  buttonRainingHoverIcon, buttonRainingHoverBg, //buttonRainingHoverInput,
  buttonRestaurantHoverIcon, buttonRestaurantHoverBg, //buttonRestaurantHoverInput,
  buttonCampingHoverIcon, buttonCampingHoverBg, //buttonCampingHoverInput,

}