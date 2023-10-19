import { FileImporter } from '../FileImporter'
import { Options } from 'csv-parse'

export abstract class CsvImporter extends FileImporter {
    constructor(file: Express.Multer.File, private delimiter: string = ',') {
        super(file)
    }

    getDelimiter(): string {
        return this.delimiter
    }

    abstract getOptions(): Options
}
