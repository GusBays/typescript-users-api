"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImpl = void 0;
const RowUserAdapter_1 = require("./Adapters/RowUserAdapter");
const UserCityInterpreter_1 = require("./Interpreters/UserCityInterpreter");
const UserCountryInterpreter_1 = require("./Interpreters/UserCountryInterpreter");
const UserFavoriteSportInterpreter_1 = require("./Interpreters/UserFavoriteSportInterpreter");
const UserNameInterpreter_1 = require("./Interpreters/UserNameInterpreter");
const UserQueryStringInterpreter_1 = require("./Interpreters/UserQueryStringInterpreter");
const User_1 = require("./Models/User");
class UserRepositoryImpl {
    create(data) {
        const model = User_1.User.create(data.toObject());
        return new RowUserAdapter_1.RowUserAdapter(model);
    }
    getAll(filter) {
        const models = User_1.User.findAll(this.getUserQuery(filter));
        return RowUserAdapter_1.RowUserAdapter.fromArray(models);
    }
    getUserQuery(filter) {
        let query = {};
        const interpreters = [
            new UserNameInterpreter_1.UserNameInterpreter(filter),
            new UserCityInterpreter_1.UserCityInterpreter(filter),
            new UserCountryInterpreter_1.UserCountryInterpreter(filter),
            new UserFavoriteSportInterpreter_1.UserFavoriteSportInterpreter(filter),
            new UserQueryStringInterpreter_1.UserQueryStringInterpreter(filter)
        ];
        for (let interpreter of interpreters) {
            query = interpreter.setOptions(query).interpret();
        }
        return query;
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
//# sourceMappingURL=UserRepositoryImpl.js.map