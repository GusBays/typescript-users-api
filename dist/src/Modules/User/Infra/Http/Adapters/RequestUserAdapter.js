"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUserAdapter = void 0;
const UserData_1 = require("../../../Domain/UserData");
class RequestUserAdapter extends UserData_1.UserData {
    constructor(request) {
        var _a, _b, _c, _d;
        super((_a = request.body) === null || _a === void 0 ? void 0 : _a.name, (_b = request.body) === null || _b === void 0 ? void 0 : _b.city, (_c = request.body) === null || _c === void 0 ? void 0 : _c.country, (_d = request.body) === null || _d === void 0 ? void 0 : _d.favorite_sport);
    }
}
exports.RequestUserAdapter = RequestUserAdapter;
//# sourceMappingURL=RequestUserAdapter.js.map