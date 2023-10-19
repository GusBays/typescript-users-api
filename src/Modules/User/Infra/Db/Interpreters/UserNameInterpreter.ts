import { DbInterpreter } from '../../../../../Common/Database/DbInterpreter'
import { isNotEmpty } from '../../../../../Common/Helpers/Helper'
import { IUserFilter } from '../../../Domain/IUser'
import { UserFilter } from '../../../Domain/UserFilter'

export class UserNameInterpreter extends DbInterpreter<IUserFilter> {
    constructor(private filter: UserFilter) {
        super()
    }

    interpret(): IUserFilter {
        const name = this.filter.getName()

        if (isNotEmpty(name)) this.query.name = name

        return this.query
    }
}
