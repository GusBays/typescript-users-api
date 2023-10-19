import { DbInterpreter } from '../../../../../Common/Database/DbInterpreter'
import { isNotEmpty } from '../../../../../Common/Helpers/Helper'
import { IUserFilter } from '../../../Domain/IUser'
import { UserFilter } from '../../../Domain/UserFilter'

export class UserFavoriteSportInterpreter extends DbInterpreter<IUserFilter> {
    constructor(private filter: UserFilter) {
        super()
    }

    interpret(): IUserFilter {
        const favoriteSport = this.filter.getFavoriteSport()

        if (isNotEmpty(favoriteSport)) this.query.favorite_sport = favoriteSport

        return this.query
    }
}
