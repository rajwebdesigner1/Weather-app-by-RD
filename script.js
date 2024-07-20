const apiKey = "55a93fb77b4aa21870b7efcdbf0a3432";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}