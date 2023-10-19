"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFavoriteSportInterpreter = void 0;
const DbInterpreter_1 = require("../../../../../Common/Database/DbInterpreter");
const Helper_1 = require("../../../../../Common/Helpers/Helper");
class UserFavoriteSportInterpreter extends DbInterpreter_1.DbInterpreter {
    constructor(filter) {
        super();
        this.filter = filter;
    }
    interpret() {
        const favoriteSport = this.filter.getFavoriteSport();
        if ((0, Helper_1.isNotEmpty)(favoriteSport))
            this.query.favorite_sport = favoriteSport;
        return this.query;
    }
}
exports.UserFavoriteSportInterpreter = UserFavoriteSportInterpreter;
//# sourceMappingURL=UserFavoriteSportInterpreter.js.map