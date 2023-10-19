import { Importer } from '../Importer'
import { ImporterTypeEnum } from '../ImporterTypeEnum'
import { UserCsvImporter } from './Csv/User/UserCsvImporter'

export abstract class FileImporterFactory {
    static getInstance(type: string, file: Express.Multer.File): Importer {
        switch (type) {
            case ImporterTypeEnum.CSV_USER:
                return UserCsvImporter.of(file)
            default:
                throw new Error('not_implemented_csv_importer')
        }
    }
}
