import { Presenter } from '../../../../../Common/Http/Presenter'
import { IUser, IUserPresenter } from '../../../Domain/IUser'
import { UserData } from '../../../Domain/UserData'

export class UserPresenter extends Presenter<UserData, IUserPresenter> {
    present(data: UserData): IUser {
        return {
            name: data.getName(),
            city: data.getCity(),
            country: data.getCountry(),
            favorite_sport: data.getFavoriteSport()
        }
    }
}
