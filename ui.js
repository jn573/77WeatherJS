class UI {
    constructor() {
        this.location = document.getElementById('w-name')
        this.country = document.getElementById('w-country')  //sys: country
        this.temp = document.getElementById('w-temp') //main: temp
        this.feelslike = document.getElementById('w-feelslike') //main: feels_like
        this.humidity = document.getElementById('w-humidity') //main: humidity
        this.clouds = document.getElementById('w-clouds') //clouds: all
    }

    paint(weather) {
        this.location.textContent = weather.name
        this.country.textContent = weather.sys.country
        this.temp.textContent = `Temperature: ${weather.main.temp}`
        this.feelslike.textContent = `Feels like: ${weather.main.feels_like}`
        this.humidity.textContent = weather.main.humidity
        this.clouds.textContent = weather.clouds.all``
    }
}