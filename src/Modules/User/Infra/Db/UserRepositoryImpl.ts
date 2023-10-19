import { InMemoryDb } from '../../../../Common/Database/InMemoryDb'
import { IUserFilter } from '../../Domain/IUser'
import { UserData } from '../../Domain/UserData'
import { UserFilter } from '../../Domain/UserFilter'
import { UserRepository } from '../../Domain/UserRepository'
import { UserUpdateData } from '../../Domain/UserUpdateData'
import { RowUserAdapter } from './Adapters/RowUserAdapter'
import { UserCityInterpreter } from './Interpreters/UserCityInterpreter'
import { UserCountryInterpreter } from './Interpreters/UserCountryInterpreter'
import { UserFavoriteSportInterpreter } from './Interpreters/UserFavoriteSportInterpreter'
import { UserNameInterpreter } from './Interpreters/UserNameInterpreter'
import { UserQueryStringInterpreter } from './Interpreters/UserQueryStringInterpreter'
import { User } from './Models/User'

export class UserRepositoryImpl implements UserRepository {
    create(data: UserData): UserUpdateData {
        const model = User.create(data.toObject())

        return new RowUserAdapter(model)
    }

    getAll(filter: UserFilter): UserUpdateData[] {
        const models = User.findAll(this.getUserQuery(filter))

        return RowUserAdapter.fromArray(models)
    }

    private getUserQuery(filter: UserFilter): IUserFilter {
        let query: IUserFilter = {}

        const interpreters = [
            new UserNameInterpreter(filter),
            new UserCityInterpreter(filter),
            new UserCountryInterpreter(filter),
            new UserFavoriteSportInterpreter(filter),
            new UserQueryStringInterpreter(filter)
        ]

        for (let interpreter of interpreters) {
            query = interpreter.setOptions(query).interpret()
        }

        return query
    }
}
