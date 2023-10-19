import express, { NextFunction, Request, Response, Router } from 'express'
import { ErrorHandler } from '../../Http/ErrorHandler'

export abstract class HttpRouter {
    protected router: Router
    protected handler: ErrorHandler

    constructor() {
        this.handler = new ErrorHandler()
        this.router = express.Router()
        this.register()
        this.router.use((err: Error, req: Request, res: Response, next: NextFunction) =>
            this.handler.handle(err, res)
        )
    }

    getEndpoints(): Router {
        return this.router
    }

    abstract register(): void
}
