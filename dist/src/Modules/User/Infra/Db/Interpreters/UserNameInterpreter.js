"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNameInterpreter = void 0;
const DbInterpreter_1 = require("../../../../../Common/Database/DbInterpreter");
const Helper_1 = require("../../../../../Common/Helpers/Helper");
class UserNameInterpreter extends DbInterpreter_1.DbInterpreter {
    constructor(filter) {
        super();
        this.filter = filter;
    }
    interpret() {
        const name = this.filter.getName();
        if ((0, Helper_1.isNotEmpty)(name))
            this.query.name = name;
        return this.query;
    }
}
exports.UserNameInterpreter = UserNameInterpreter;
//# sourceMappingURL=UserNameInterpreter.js.map