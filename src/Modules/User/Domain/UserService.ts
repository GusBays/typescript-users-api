import { UserUpdateData } from './UserUpdateData'
import { UserFilter } from './UserFilter'
import { UserData } from './UserData'

export interface UserService {
    create(data: UserData): UserUpdateData
    getAll(filter: UserFilter): UserUpdateData[]
    importCsv(file: Express.Multer.File): void
}
