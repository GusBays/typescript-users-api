"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCsvImporter = void 0;
const tsyringe_1 = require("tsyringe");
const csv_parse_1 = require("csv-parse");
const CsvImporter_1 = require("../CsvImporter");
const CsvDefaultHeaders_1 = require("../CsvDefaultHeaders");
const CsvUserAdapter_1 = require("../../../../../Modules/User/Infra/Http/Adapters/CsvUserAdapter");
const UserTypeEnum_1 = require("../../../../../Modules/User/Domain/UserTypeEnum");
const Helper_1 = require("../../../../Helpers/Helper");
class UserCsvImporter extends CsvImporter_1.CsvImporter {
    static of(file) {
        return new UserCsvImporter(file);
    }
    import() {
        const userRepository = this.getUserRepository();
        const toUserData = (csvUser) => new CsvUserAdapter_1.CsvUserAdapter(csvUser);
        const toCreate = (data) => userRepository.create(data);
        (0, csv_parse_1.parse)(this.getFile().buffer.toString(), this.getOptions(), (error, records) => {
            if ((0, Helper_1.isNotEmpty)(error))
                throw error;
            records.map(toUserData).map(toCreate);
        });
    }
    getOptions() {
        return {
            columns: CsvDefaultHeaders_1.CsvDefaultHeaders.USERS_HEADERS,
            delimiter: this.getDelimiter(),
            from: 2
        };
    }
    getUserRepository() {
        return tsyringe_1.container.resolve(UserTypeEnum_1.UserTypeEnum.REPOSITORY);
    }
}
exports.UserCsvImporter = UserCsvImporter;
//# sourceMappingURL=UserCsvImporter.js.map