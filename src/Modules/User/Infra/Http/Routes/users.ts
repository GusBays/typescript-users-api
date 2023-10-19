import { container } from 'tsyringe'
import { HttpRouter } from '../../../../../Common/Server/Router/HttpRouter'
import { UserController } from '../../../Domain/UserController'
import { UserTypeEnum } from '../../../Domain/UserTypeEnum'
import { NextFunction, Request, Response } from 'express'
import multer from 'multer'

export class UserRoutes extends HttpRouter {
    private controller = container.resolve<UserController>(UserTypeEnum.CONTROLLER)

    register(): void {
        this.router.post(
            '/api/files',
            multer().single('file'),
            (req: Request, res: Response, next: NextFunction) => this.controller.importCsv(req, res)
        )

        this.router.get('/api/users', (req: Request, res: Response, next: NextFunction) =>
            this.controller.index(req, res)
        )
    }
}
