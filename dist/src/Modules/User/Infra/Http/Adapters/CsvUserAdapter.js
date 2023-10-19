"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvUserAdapter = void 0;
const UserData_1 = require("../../../Domain/UserData");
class CsvUserAdapter extends UserData_1.UserData {
    constructor(data) {
        super(data.name, data.city, data.country, data.favorite_sport);
    }
}
exports.CsvUserAdapter = CsvUserAdapter;
//# sourceMappingURL=CsvUserAdapter.js.map