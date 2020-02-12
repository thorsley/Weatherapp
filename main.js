// Open weather API
const subBtn = document.querySelector('.button');
const search = document.querySelector('.search');
const temp = document.querySelector('.temp');
const tempMin = document.querySelector('.temp_min');
const wind = document.querySelector('.wind');

subBtn.addEventListener('click',fetchResults)


function fetchResults(e){
  e.preventDefault()
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + search.value + "&units=Imperial&appid=f340f1de73f3193cb855cbcda23ece38")
.then((response) => {
    return response.json();
  })
  .then((info) => {
      display(info);
    console.log(info);
    console.log(info.main.temp);
    console.log(info.main.temp_min);
    console.log(info.wind.speed);
    
  })};
 

function display(info){
  let temperature= info.main.temp;
  let tempMin = info.main.temp_min;
  let windSpeed = info.wind.speed;
  document.getElementById('temp').innerHTML=temperature;
  document.getElementById('temp-min').innerHTML=tempMin;
  document.getElementById('wind').innerHTML=windSpeed;
};

