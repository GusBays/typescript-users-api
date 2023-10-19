import { InMemoryDb } from '../../../../../Common/Database/InMemoryDb'
import { isEmpty } from '../../../../../Common/Helpers/Helper'
import { IUser, IUserFilter } from '../../../Domain/IUser'

export class User {
    static create(data: IUser): IUser {
        InMemoryDb.push(data)
        data.id = InMemoryDb.indexOf(data) + 1
        data.created_at = new Date().toISOString()
        data.updated_at = new Date().toISOString()
        return data
    }

    static findAll(query: IUserFilter): IUser[] {
        const users = InMemoryDb as IUser[]

        const byFields = (row: IUser) => {
            if (isEmpty(query)) return true

            if (query.queryString) {
                let match = false
                for (let value of Object.values(row)) {
                    const fieldString = String(value).toLocaleLowerCase()

                    if (fieldString.includes(query.queryString)) match = true
                }
                return match
            } else {
                let match = false
                for (let field of Object.keys(query)) {
                    const queryFieldString = String(query[field]).toLowerCase()
                    const userFieldString = String(row[field]).toLowerCase()

                    if (userFieldString.includes(queryFieldString)) match = true
                    else match = false
                }
                return match
            }
        }
        return users.filter(byFields)
    }
}
