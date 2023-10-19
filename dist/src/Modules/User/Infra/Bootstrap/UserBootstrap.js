"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBootstrap = void 0;
const tsyringe_1 = require("tsyringe");
const UserPresenter_1 = require("../Http/Presenters/UserPresenter");
const UserTypeEnum_1 = require("../../Domain/UserTypeEnum");
const UserControllerImpl_1 = require("../Http/Controllers/UserControllerImpl");
const UserServiceImpl_1 = require("../../Application/UserServiceImpl");
const UserRepositoryImpl_1 = require("../Db/UserRepositoryImpl");
class UserBootstrap {
    handler() {
        tsyringe_1.container.register(UserTypeEnum_1.UserTypeEnum.PRESENTER, UserPresenter_1.UserPresenter);
        tsyringe_1.container.register(UserTypeEnum_1.UserTypeEnum.CONTROLLER, UserControllerImpl_1.UserControllerImpl);
        tsyringe_1.container.register(UserTypeEnum_1.UserTypeEnum.SERVICE, UserServiceImpl_1.UserServiceImpl);
        tsyringe_1.container.register(UserTypeEnum_1.UserTypeEnum.REPOSITORY, UserRepositoryImpl_1.UserRepositoryImpl);
    }
}
exports.UserBootstrap = UserBootstrap;
//# sourceMappingURL=UserBootstrap.js.map