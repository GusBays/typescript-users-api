import { Response } from 'express'
import { ResponseTypeEnum } from './ResponseTypeEnum'

export class ErrorHandler {
    handle(error: Error, res: Response): Response {
        console.log(error)
        return res.status(ResponseTypeEnum.HTTP_INTERNAL_SERVER_ERROR).json({
            message: error.message
        })
    }
}
