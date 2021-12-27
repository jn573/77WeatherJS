class UI {
    constructor() {
        this.location = document.getElementById('w-name')
        this.country = document.getElementById('w-country')  //sys: country
        this.temp = document.getElementById('w-temp') //main: temp
        this.feelslike = document.getElementById('w-feelslike') //main: feels_like
        this.humidity = document.getElementById('w-humidity') //main: humidity
        this.clouds = document.getElementById('w-clouds') //clouds: all
        this.weather = document.getElementById('w-weather') //clouds: all
        this.description = document.getElementById('w-desc') //clouds: all
    }

    paint(weather) {
        const temperature = weather.main.temp - 273.15
        const feelslike = weather.main.feels_like - 273.15
        this.location.textContent = `Country code: ${weather.name}`
        this.country.textContent = `City: ${weather.sys.country}`
        this.temp.textContent = `Temperature celcius: ${temperature.toFixed(1)}`
        this.feelslike.textContent = `Feels like: ${feelslike.toFixed(1)}`
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`
        this.clouds.textContent = `Clouds: ${weather.clouds.all}`
        this.weather.textContent = `Weather: ${weather.weather.weather}`
        this.description.textContent = weather.weather.description
    }
}
