"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileImporterFactory = void 0;
const ImporterTypeEnum_1 = require("../ImporterTypeEnum");
const UserCsvImporter_1 = require("./Csv/User/UserCsvImporter");
class FileImporterFactory {
    static getInstance(type, file) {
        switch (type) {
            case ImporterTypeEnum_1.ImporterTypeEnum.CSV_USER:
                return UserCsvImporter_1.UserCsvImporter.of(file);
            default:
                throw new Error('not_implemented_csv_importer');
        }
    }
}
exports.FileImporterFactory = FileImporterFactory;
//# sourceMappingURL=FileImporterFactory.js.map