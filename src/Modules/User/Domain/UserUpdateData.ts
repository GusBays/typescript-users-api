import { IUser } from './IUser'
import { UserData } from './UserData'

export abstract class UserUpdateData extends UserData {
    constructor(
        private id: number,
        name: string,
        city: string,
        country: string,
        favoriteSport: string,
        private createdAt: string,
        private updatedAt: string
    ) {
        super(name, city, country, favoriteSport)
    }

    getId(): number {
        return this.id
    }

    getCreatedAt(): string {
        return this.createdAt
    }

    getUpdatedAt(): string {
        return this.updatedAt
    }

    toObject(): IUser {
        const data = super.toObject()
        data.id = this.getId()
        data.created_at = this.getCreatedAt()
        data.updated_at = this.getUpdatedAt()
        return data
    }
}
