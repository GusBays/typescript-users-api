"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbUserFilter = void 0;
const UserFilter_1 = require("../../../Domain/UserFilter");
class DbUserFilter extends UserFilter_1.UserFilter {
    constructor(data) {
        super(data.name, data.city, data.country, data.favorite_sport, data.queryString);
    }
}
exports.DbUserFilter = DbUserFilter;
//# sourceMappingURL=DbUserFilter.js.map