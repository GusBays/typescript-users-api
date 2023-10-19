"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserData = void 0;
class UserData {
    constructor(name, city, country, favoriteSport) {
        this.name = name;
        this.city = city;
        this.country = country;
        this.favoriteSport = favoriteSport;
    }
    getName() {
        return this.name;
    }
    getCity() {
        return this.city;
    }
    getCountry() {
        return this.country;
    }
    getFavoriteSport() {
        return this.favoriteSport;
    }
    toObject() {
        return {
            name: this.getName(),
            city: this.getCity(),
            country: this.getCountry(),
            favorite_sport: this.getFavoriteSport()
        };
    }
}
exports.UserData = UserData;
//# sourceMappingURL=UserData.js.map