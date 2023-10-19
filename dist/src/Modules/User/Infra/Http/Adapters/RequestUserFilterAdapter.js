"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUserFilterAdapter = void 0;
const UserFilter_1 = require("../../../Domain/UserFilter");
const Helper_1 = require("../../../../../Common/Helpers/Helper");
class RequestUserFilterAdapter extends UserFilter_1.UserFilter {
    constructor(request) {
        const transformName = () => {
            var _a;
            const name = (_a = request.query) === null || _a === void 0 ? void 0 : _a.name;
            if ((0, Helper_1.isEmpty)(name))
                return null;
            return name.toString();
        };
        const transformCity = () => {
            var _a;
            const city = (_a = request.query) === null || _a === void 0 ? void 0 : _a.city;
            if ((0, Helper_1.isEmpty)(city))
                return null;
            return city.toString();
        };
        const transformCountry = () => {
            var _a;
            const country = (_a = request.query) === null || _a === void 0 ? void 0 : _a.country;
            if ((0, Helper_1.isEmpty)(country))
                return null;
            return country.toString();
        };
        const transformFavoriteSport = () => {
            var _a;
            const favoriteSport = (_a = request.query) === null || _a === void 0 ? void 0 : _a.favorite_sport;
            if ((0, Helper_1.isEmpty)(favoriteSport))
                return null;
            return favoriteSport.toString();
        };
        const transformQueryString = () => {
            const queryString = request.query.q;
            if ((0, Helper_1.isEmpty)(queryString))
                return null;
            return queryString.toString().toLocaleLowerCase();
        };
        super(transformName(), transformCity(), transformCountry(), transformFavoriteSport(), transformQueryString());
    }
}
exports.RequestUserFilterAdapter = RequestUserFilterAdapter;
//# sourceMappingURL=RequestUserFilterAdapter.js.map