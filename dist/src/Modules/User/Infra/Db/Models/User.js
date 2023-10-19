"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const InMemoryDb_1 = require("../../../../../Common/Database/InMemoryDb");
const Helper_1 = require("../../../../../Common/Helpers/Helper");
class User {
    static create(data) {
        InMemoryDb_1.InMemoryDb.push(data);
        data.id = InMemoryDb_1.InMemoryDb.indexOf(data) + 1;
        data.created_at = new Date().toISOString();
        data.updated_at = new Date().toISOString();
        return data;
    }
    static findAll(query) {
        const users = InMemoryDb_1.InMemoryDb;
        const byFields = (row) => {
            if ((0, Helper_1.isEmpty)(query))
                return true;
            if (query.queryString) {
                let match = false;
                for (let value of Object.values(row)) {
                    const fieldString = String(value).toLocaleLowerCase();
                    if (fieldString.includes(query.queryString))
                        match = true;
                }
                return match;
            }
            else {
                let match = false;
                for (let field of Object.keys(query)) {
                    const queryFieldString = String(query[field]).toLowerCase();
                    const userFieldString = String(row[field]).toLowerCase();
                    if (userFieldString.includes(queryFieldString))
                        match = true;
                    else
                        match = false;
                }
                return match;
            }
        };
        return users.filter(byFields);
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map