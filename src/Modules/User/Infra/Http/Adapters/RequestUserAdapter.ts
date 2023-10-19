import { Request } from 'express'
import { UserData } from '../../../Domain/UserData'

export class RequestUserAdapter extends UserData {
    constructor(request: Request) {
        super(
            request.body?.name,
            request.body?.city,
            request.body?.country,
            request.body?.favorite_sport
        )
    }
}
