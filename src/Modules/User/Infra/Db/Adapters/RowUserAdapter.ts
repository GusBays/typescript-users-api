import { IUser } from '../../../Domain/IUser'
import { UserUpdateData } from '../../../Domain/UserUpdateData'

export class RowUserAdapter extends UserUpdateData {
    constructor(row: IUser) {
        super(
            row.id,
            row.name,
            row.city,
            row.country,
            row.favorite_sport,
            row.created_at,
            row.updated_at
        )
    }

    static fromArray(rows: IUser[]): UserUpdateData[] {
        const toUserData = (row: IUser) => new RowUserAdapter(row)
        return rows.map(toUserData)
    }
}
