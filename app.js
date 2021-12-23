// init weather object
const weather = new Weather('Johannesburg', 'za')

// weather.changeLocation('London', 'uk')

document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
    weather.getWeather()
        .then(results =>  console.log(results))//ui.paint(results))
        .catch(err => console.log(err))
}