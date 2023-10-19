"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountryInterpreter = void 0;
const DbInterpreter_1 = require("../../../../../Common/Database/DbInterpreter");
const Helper_1 = require("../../../../../Common/Helpers/Helper");
class UserCountryInterpreter extends DbInterpreter_1.DbInterpreter {
    constructor(filter) {
        super();
        this.filter = filter;
    }
    interpret() {
        const country = this.filter.getCountry();
        if ((0, Helper_1.isNotEmpty)(country))
            this.query.country = country;
        return this.query;
    }
}
exports.UserCountryInterpreter = UserCountryInterpreter;
//# sourceMappingURL=UserCountryInterpreter.js.map