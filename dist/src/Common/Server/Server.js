"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const Environment_1 = require("../Environment/Environment");
class Server {
    constructor(routes) {
        this.config = Environment_1.Environment.get().app;
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
        for (let route of routes) {
            app.use(route.getEndpoints());
        }
        const protocol = this.config.env === 'local' ? 'http://' : 'https://';
        const url = protocol + this.config.hostname + ':' + this.config.port;
        app.listen(this.config.port || 3000, this.config.hostname, () => console.log(`App runing on: ${url}`));
    }
    static create(routes) {
        return new Server(routes);
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map