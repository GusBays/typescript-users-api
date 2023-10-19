export abstract class UserFilter {
    constructor(
        private name: string,
        private city: string,
        private country: string,
        private favoriteSport: string,
        private queryString: string
    ) {}

    getName(): string {
        return this.name
    }

    getCity(): string {
        return this.city
    }

    getCountry(): string {
        return this.country
    }

    getFavoriteSport(): string {
        return this.favoriteSport
    }

    getQueryString(): string {
        return this.queryString
    }
}
