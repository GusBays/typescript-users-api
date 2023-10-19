"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateData = void 0;
const UserData_1 = require("./UserData");
class UserUpdateData extends UserData_1.UserData {
    constructor(id, name, city, country, favoriteSport, createdAt, updatedAt) {
        super(name, city, country, favoriteSport);
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    getId() {
        return this.id;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
    toObject() {
        const data = super.toObject();
        data.id = this.getId();
        data.created_at = this.getCreatedAt();
        data.updated_at = this.getUpdatedAt();
        return data;
    }
}
exports.UserUpdateData = UserUpdateData;
//# sourceMappingURL=UserUpdateData.js.map