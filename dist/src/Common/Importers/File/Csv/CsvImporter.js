"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvImporter = void 0;
const FileImporter_1 = require("../FileImporter");
class CsvImporter extends FileImporter_1.FileImporter {
    constructor(file, delimiter = ',') {
        super(file);
        this.delimiter = delimiter;
    }
    getDelimiter() {
        return this.delimiter;
    }
}
exports.CsvImporter = CsvImporter;
//# sourceMappingURL=CsvImporter.js.map