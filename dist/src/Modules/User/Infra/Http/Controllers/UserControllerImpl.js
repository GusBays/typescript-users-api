"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllerImpl = void 0;
const tsyringe_1 = require("tsyringe");
const UserTypeEnum_1 = require("../../../Domain/UserTypeEnum");
const ResponseTypeEnum_1 = require("../../../../../Common/Http/ResponseTypeEnum");
const UserPresenter_1 = require("../Presenters/UserPresenter");
const RequestUserFilterAdapter_1 = require("../Adapters/RequestUserFilterAdapter");
const RequestUserAdapter_1 = require("../Adapters/RequestUserAdapter");
let UserControllerImpl = class UserControllerImpl {
    constructor(service, presenter) {
        this.service = service;
        this.presenter = presenter;
    }
    store(req, res) {
        const resource = this.service.create(new RequestUserAdapter_1.RequestUserAdapter(req));
        return res.status(ResponseTypeEnum_1.ResponseTypeEnum.HTTP_CREATED).json(this.presenter.present(resource));
    }
    index(req, res) {
        const resources = this.service.getAll(new RequestUserFilterAdapter_1.RequestUserFilterAdapter(req));
        return res
            .status(ResponseTypeEnum_1.ResponseTypeEnum.HTTP_OK)
            .json(this.presenter.setRequest(req).presentAll(resources));
    }
    importCsv(req, res) {
        this.service.importCsv(req.file);
        return res
            .status(ResponseTypeEnum_1.ResponseTypeEnum.HTTP_OK)
            .json({ message: 'The file was uploaded successfully' });
    }
};
exports.UserControllerImpl = UserControllerImpl;
exports.UserControllerImpl = UserControllerImpl = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(UserTypeEnum_1.UserTypeEnum.SERVICE)),
    __param(1, (0, tsyringe_1.inject)(UserTypeEnum_1.UserTypeEnum.PRESENTER)),
    __metadata("design:paramtypes", [Object, UserPresenter_1.UserPresenter])
], UserControllerImpl);
//# sourceMappingURL=UserControllerImpl.js.map