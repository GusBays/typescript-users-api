import { Objectable } from '../../../Common/Contracts/Objectable'
import { IUser } from './IUser'

export abstract class UserData implements Objectable<IUser> {
    constructor(
        private name: string,
        private city: string,
        private country: string,
        private favoriteSport: string
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

    toObject(): IUser {
        return {
            name: this.getName(),
            city: this.getCity(),
            country: this.getCountry(),
            favorite_sport: this.getFavoriteSport()
        }
    }
}
