"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const tsyringe_1 = require("tsyringe");
const HttpRouter_1 = require("../../../../../Common/Server/Router/HttpRouter");
const UserTypeEnum_1 = require("../../../Domain/UserTypeEnum");
const multer_1 = __importDefault(require("multer"));
class UserRoutes extends HttpRouter_1.HttpRouter {
    constructor() {
        super(...arguments);
        this.controller = tsyringe_1.container.resolve(UserTypeEnum_1.UserTypeEnum.CONTROLLER);
    }
    register() {
        this.router.post('/api/files', (0, multer_1.default)().single('file'), (req, res, next) => this.controller.importCsv(req, res));
        this.router.get('/api/users', (req, res, next) => this.controller.index(req, res));
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=users.js.map