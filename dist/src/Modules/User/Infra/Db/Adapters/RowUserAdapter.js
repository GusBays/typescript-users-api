"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RowUserAdapter = void 0;
const UserUpdateData_1 = require("../../../Domain/UserUpdateData");
class RowUserAdapter extends UserUpdateData_1.UserUpdateData {
    constructor(row) {
        super(row.id, row.name, row.city, row.country, row.favorite_sport, row.created_at, row.updated_at);
    }
    static fromArray(rows) {
        const toUserData = (row) => new RowUserAdapter(row);
        return rows.map(toUserData);
    }
}
exports.RowUserAdapter = RowUserAdapter;
//# sourceMappingURL=RowUserAdapter.js.map