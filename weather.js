class Weather {
    constructor(city,country,start,end,hour) {
        this.apiKey = '6598d102e5bec012043a050049bc268a';
        this.city = city;
        this.country = country;
        // this.hour = hour;
        // this.start=start;
        // this.end = end;

    }

    //fetch weather from api
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`)
        const responseData = await response.json()

        return responseData

    }

    changeLocation(city,country) {
        this.city = city;
        this.country = country;
    }
}