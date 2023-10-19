import { IUserCsv } from '../../../Domain/IUser'
import { UserData } from '../../../Domain/UserData'

export class CsvUserAdapter extends UserData {
    constructor(data: IUserCsv) {
        super(data.name, data.city, data.country, data.favorite_sport)
    }
}
