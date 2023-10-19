"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseTypeEnum = void 0;
var ResponseTypeEnum;
(function (ResponseTypeEnum) {
    ResponseTypeEnum[ResponseTypeEnum["HTTP_OK"] = 200] = "HTTP_OK";
    ResponseTypeEnum[ResponseTypeEnum["HTTP_CREATED"] = 201] = "HTTP_CREATED";
    ResponseTypeEnum[ResponseTypeEnum["HTTP_NO_CONTENT"] = 204] = "HTTP_NO_CONTENT";
    ResponseTypeEnum[ResponseTypeEnum["HTTP_BAD_REQUEST"] = 400] = "HTTP_BAD_REQUEST";
    ResponseTypeEnum[ResponseTypeEnum["HTTP_UNAUTHORIZED"] = 401] = "HTTP_UNAUTHORIZED";
    ResponseTypeEnum[ResponseTypeEnum["HTTP_FORBIDDEN"] = 403] = "HTTP_FORBIDDEN";
    ResponseTypeEnum[ResponseTypeEnum["HTTP_NOT_FOUND"] = 404] = "HTTP_NOT_FOUND";
    ResponseTypeEnum[ResponseTypeEnum["HTTP_UNPROCESSABLE_ENTITY"] = 422] = "HTTP_UNPROCESSABLE_ENTITY";
    ResponseTypeEnum[ResponseTypeEnum["HTTP_INTERNAL_SERVER_ERROR"] = 500] = "HTTP_INTERNAL_SERVER_ERROR";
})(ResponseTypeEnum || (exports.ResponseTypeEnum = ResponseTypeEnum = {}));
//# sourceMappingURL=ResponseTypeEnum.js.map