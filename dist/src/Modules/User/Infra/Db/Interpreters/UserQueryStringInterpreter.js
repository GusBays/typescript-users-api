"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQueryStringInterpreter = void 0;
const DbInterpreter_1 = require("../../../../../Common/Database/DbInterpreter");
const Helper_1 = require("../../../../../Common/Helpers/Helper");
class UserQueryStringInterpreter extends DbInterpreter_1.DbInterpreter {
    constructor(filter) {
        super();
        this.filter = filter;
    }
    interpret() {
        const queryString = this.filter.getQueryString();
        if ((0, Helper_1.isNotEmpty)(queryString))
            this.query.queryString = queryString;
        return this.query;
    }
}
exports.UserQueryStringInterpreter = UserQueryStringInterpreter;
//# sourceMappingURL=UserQueryStringInterpreter.js.map