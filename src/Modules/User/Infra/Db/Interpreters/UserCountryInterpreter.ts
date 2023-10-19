import { DbInterpreter } from '../../../../../Common/Database/DbInterpreter'
import { isNotEmpty } from '../../../../../Common/Helpers/Helper'
import { IUserFilter } from '../../../Domain/IUser'
import { UserFilter } from '../../../Domain/UserFilter'

export class UserCountryInterpreter extends DbInterpreter<IUserFilter> {
    constructor(private filter: UserFilter) {
        super()
    }

    interpret(): IUserFilter {
        const country = this.filter.getCountry()

        if (isNotEmpty(country)) this.query.country = country

        return this.query
    }
}
