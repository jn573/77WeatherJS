// init storage
const storage = new Storage()
const weatherLocation = storage.getLocationData()

// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country)

const ui = new UI();

// weather.changeLocation('London', 'uk')

document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
    weather.getWeather()
        .then(results => ui.paint(results))
        // .then(results =>  console.log(results))
        .catch(err => console.log(err))
}

// close modal
// const modal = document.getElementById('locModal')
const saveChanges = document.getElementById('w-change-btn')
// document.getElementById('w-change-btn').addEventListener('click')

saveChanges.addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const modal = document.getElementById('locModal')
    console.log(`City:  ${city}`)
    console.log(`Country: ${country}`)
    storage.setLocationData(city,country)

    weather.changeLocation(city,country)
    getWeather()

})