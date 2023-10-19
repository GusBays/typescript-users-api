import { inject, injectable } from 'tsyringe'
import { UserFilter } from '../Domain/UserFilter'
import { UserService } from '../Domain/UserService'
import { UserTypeEnum } from '../Domain/UserTypeEnum'
import { UserRepository } from '../Domain/UserRepository'
import { UserUpdateData } from '../Domain/UserUpdateData'
import { FileImporterFactory } from '../../../Common/Importers/File/FileImporterFactory'
import { ImporterTypeEnum } from '../../../Common/Importers/ImporterTypeEnum'
import { UserData } from '../Domain/UserData'

@injectable()
export class UserServiceImpl implements UserService {
    constructor(@inject(UserTypeEnum.REPOSITORY) private repository: UserRepository) {}

    create(data: UserData): UserUpdateData {
        return this.repository.create(data)
    }

    getAll(filter: UserFilter): UserUpdateData[] {
        return this.repository.getAll(filter)
    }

    importCsv(file: Express.Multer.File): void {
        const importer = FileImporterFactory.getInstance(ImporterTypeEnum.CSV_USER, file)
        importer.import()
    }
}
