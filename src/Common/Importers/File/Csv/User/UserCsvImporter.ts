import { container } from 'tsyringe'
import { Options, CsvError, parse } from 'csv-parse'
import { CsvImporter } from '../CsvImporter'
import { CsvDefaultHeaders } from '../CsvDefaultHeaders'
import { IUserCsv } from '../../../../../Modules/User/Domain/IUser'
import { CsvUserAdapter } from '../../../../../Modules/User/Infra/Http/Adapters/CsvUserAdapter'
import { UserRepository } from '../../../../../Modules/User/Domain/UserRepository'
import { UserTypeEnum } from '../../../../../Modules/User/Domain/UserTypeEnum'
import { UserData } from '../../../../../Modules/User/Domain/UserData'
import { isNotEmpty } from '../../../../Helpers/Helper'
import { InMemoryDb } from '../../../../Database/InMemoryDb'

export class UserCsvImporter extends CsvImporter {
    static of(file: Express.Multer.File): UserCsvImporter {
        return new UserCsvImporter(file)
    }

    import(): void {
        const userRepository = this.getUserRepository()
        const toUserData = (csvUser: IUserCsv) => new CsvUserAdapter(csvUser)
        const toCreate = (data: UserData) => userRepository.create(data)
        parse(
            this.getFile().buffer.toString(),
            this.getOptions(),
            (error: CsvError, records: IUserCsv[]) => {
                if (isNotEmpty(error)) throw error
                records.map(toUserData).map(toCreate)
            }
        )
    }

    getOptions(): Options {
        return {
            columns: CsvDefaultHeaders.USERS_HEADERS,
            delimiter: this.getDelimiter(),
            from: 2
        }
    }

    private getUserRepository(): UserRepository {
        return container.resolve<UserRepository>(UserTypeEnum.REPOSITORY)
    }
}
