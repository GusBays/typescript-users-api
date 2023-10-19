import { UserUpdateData } from './UserUpdateData'
import { UserFilter } from './UserFilter'
import { UserData } from './UserData'

export interface UserRepository {
    create(data: UserData): UserUpdateData
    getAll(filter: UserFilter): UserUpdateData[]
}
