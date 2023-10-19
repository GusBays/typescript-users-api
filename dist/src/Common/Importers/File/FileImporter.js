"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileImporter = void 0;
class FileImporter {
    constructor(file) {
        this.file = file;
    }
    getFile() {
        return this.file;
    }
    getExtension() {
        return this.file.mimetype;
    }
    getName() {
        return this.file.filename;
    }
    getPath() {
        return this.file.path;
    }
}
exports.FileImporter = FileImporter;
//# sourceMappingURL=FileImporter.js.map