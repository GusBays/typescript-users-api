import { Importer } from '../Importer'

export abstract class FileImporter implements Importer {
    constructor(private file: Express.Multer.File) {}

    abstract import(): void

    getFile(): Express.Multer.File {
        return this.file
    }

    getExtension(): string {
        return this.file.mimetype
    }

    getName(): string {
        return this.file.filename
    }

    getPath(): string {
        return this.file.path
    }
}
