import { DbInterpreter } from '../../../../../Common/Database/DbInterpreter'
import { isNotEmpty } from '../../../../../Common/Helpers/Helper'
import { IUserFilter } from '../../../Domain/IUser'
import { UserFilter } from '../../../Domain/UserFilter'

export class UserCityInterpreter extends DbInterpreter<IUserFilter> {
    constructor(private filter: UserFilter) {
        super()
    }

    interpret(): IUserFilter {
        const city = this.filter.getCity()

        if (isNotEmpty(city)) this.query.city = city

        return this.query
    }
}
