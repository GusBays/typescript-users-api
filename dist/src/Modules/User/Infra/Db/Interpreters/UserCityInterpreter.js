"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCityInterpreter = void 0;
const DbInterpreter_1 = require("../../../../../Common/Database/DbInterpreter");
const Helper_1 = require("../../../../../Common/Helpers/Helper");
class UserCityInterpreter extends DbInterpreter_1.DbInterpreter {
    constructor(filter) {
        super();
        this.filter = filter;
    }
    interpret() {
        const city = this.filter.getCity();
        if ((0, Helper_1.isNotEmpty)(city))
            this.query.city = city;
        return this.query;
    }
}
exports.UserCityInterpreter = UserCityInterpreter;
//# sourceMappingURL=UserCityInterpreter.js.map