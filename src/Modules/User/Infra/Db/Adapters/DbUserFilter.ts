import { IUserFilter } from '../../../Domain/IUser'
import { UserFilter } from '../../../Domain/UserFilter'

export class DbUserFilter extends UserFilter {
    constructor(data: IUserFilter) {
        super(data.name, data.city, data.country, data.favorite_sport, data.queryString)
    }
}
