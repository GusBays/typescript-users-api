"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const ResponseTypeEnum_1 = require("./ResponseTypeEnum");
class ErrorHandler {
    handle(error, res) {
        return res.status(ResponseTypeEnum_1.ResponseTypeEnum.HTTP_INTERNAL_SERVER_ERROR).json({
            message: error.message
        });
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map