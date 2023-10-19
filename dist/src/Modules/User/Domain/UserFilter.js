"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFilter = void 0;
class UserFilter {
    constructor(name, city, country, favoriteSport, queryString) {
        this.name = name;
        this.city = city;
        this.country = country;
        this.favoriteSport = favoriteSport;
        this.queryString = queryString;
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
    getQueryString() {
        return this.queryString;
    }
}
exports.UserFilter = UserFilter;
//# sourceMappingURL=UserFilter.js.map