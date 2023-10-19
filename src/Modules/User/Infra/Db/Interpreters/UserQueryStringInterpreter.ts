import { DbInterpreter } from '../../../../../Common/Database/DbInterpreter'
import { isNotEmpty } from '../../../../../Common/Helpers/Helper'
import { IUserFilter } from '../../../Domain/IUser'
import { UserFilter } from '../../../Domain/UserFilter'

export class UserQueryStringInterpreter extends DbInterpreter<IUserFilter> {
    constructor(private filter: UserFilter) {
        super()
    }

    interpret(): IUserFilter {
        const queryString = this.filter.getQueryString()

        if (isNotEmpty(queryString)) this.query.queryString = queryString

        return this.query
    }
}
