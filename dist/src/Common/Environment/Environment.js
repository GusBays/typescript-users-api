"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const dotenv_1 = require("dotenv");
class Environment {
    constructor() {
        (0, dotenv_1.config)();
    }
    static create() {
        return new Environment();
    }
    static get() {
        return {
            app: {
                env: process.env.APP_ENV,
                port: +process.env.PORT,
                hostname: process.env.HOSTNAME
            }
        };
    }
}
exports.Environment = Environment;
//# sourceMappingURL=Environment.js.map