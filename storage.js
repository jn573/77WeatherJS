class Storage {
    constructor() {
        this.city;
        this.country;
        this.defaultCity = 'Johannesburg';
        this.defaultCountry = 'za';
    }

    getLocationData() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity
            localStorage.setItem('city',this.defaultCity)
        } else {
            this.city = localStorage.getItem('city')
        }

        if (localStorage.getItem('country') === null) {
            this.country = this.defaultCountry
            localStorage.setItem('country',this.defaultCountry)
        } else {
            this.country = localStorage.getItem('country')
        }

        return {
            city: this.city,
            country: this.country
        }
    }

    setLocationData(city, country) {
        localStorage.setItem('city', city)
        localStorage.setItem('country', country)
    }
}