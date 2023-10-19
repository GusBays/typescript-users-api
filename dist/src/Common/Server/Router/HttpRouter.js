"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRouter = void 0;
const express_1 = __importDefault(require("express"));
const ErrorHandler_1 = require("../../Http/ErrorHandler");
class HttpRouter {
    constructor() {
        this.handler = new ErrorHandler_1.ErrorHandler();
        this.router = express_1.default.Router();
        this.register();
        this.router.use((err, req, res, next) => this.handler.handle(err, res));
    }
    getEndpoints() {
        return this.router;
    }
}
exports.HttpRouter = HttpRouter;
//# sourceMappingURL=HttpRouter.js.map