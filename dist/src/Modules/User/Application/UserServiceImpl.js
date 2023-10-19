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
exports.UserServiceImpl = void 0;
const tsyringe_1 = require("tsyringe");
const UserTypeEnum_1 = require("../Domain/UserTypeEnum");
const FileImporterFactory_1 = require("../../../Common/Importers/File/FileImporterFactory");
const ImporterTypeEnum_1 = require("../../../Common/Importers/ImporterTypeEnum");
let UserServiceImpl = class UserServiceImpl {
    constructor(repository) {
        this.repository = repository;
    }
    create(data) {
        return this.repository.create(data);
    }
    getAll(filter) {
        return this.repository.getAll(filter);
    }
    importCsv(file) {
        const importer = FileImporterFactory_1.FileImporterFactory.getInstance(ImporterTypeEnum_1.ImporterTypeEnum.CSV_USER, file);
        importer.import();
    }
};
exports.UserServiceImpl = UserServiceImpl;
exports.UserServiceImpl = UserServiceImpl = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(UserTypeEnum_1.UserTypeEnum.REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], UserServiceImpl);
//# sourceMappingURL=UserServiceImpl.js.map