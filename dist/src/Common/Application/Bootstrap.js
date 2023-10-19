"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bootstrap = void 0;
class Bootstrap {
    constructor(bootstraps) {
        for (let bootstrap of bootstraps) {
            bootstrap.handler();
        }
    }
    static create(bootstraps) {
        return new Bootstrap(bootstraps);
    }
}
exports.Bootstrap = Bootstrap;
//# sourceMappingURL=Bootstrap.js.map