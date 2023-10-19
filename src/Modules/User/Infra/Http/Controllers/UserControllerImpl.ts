import { inject, injectable } from 'tsyringe'
import { UserController } from '../../../Domain/UserController'
import { UserTypeEnum } from '../../../Domain/UserTypeEnum'
import { UserService } from '../../../Domain/UserService'
import { Request, Response } from 'express'
import { ResponseTypeEnum } from '../../../../../Common/Http/ResponseTypeEnum'
import { UserPresenter } from '../Presenters/UserPresenter'
import { RequestUserFilterAdapter } from '../Adapters/RequestUserFilterAdapter'
import { RequestUserAdapter } from '../Adapters/RequestUserAdapter'

@injectable()
export class UserControllerImpl implements UserController {
    constructor(
        @inject(UserTypeEnum.SERVICE) private service: UserService,
        @inject(UserTypeEnum.PRESENTER) private presenter: UserPresenter
    ) {}

    store(req: Request, res: Response): Response {
        const resource = this.service.create(new RequestUserAdapter(req))

        return res.status(ResponseTypeEnum.HTTP_CREATED).json(this.presenter.present(resource))
    }

    index(req: Request, res: Response): Response {
        const resources = this.service.getAll(new RequestUserFilterAdapter(req))

        return res
            .status(ResponseTypeEnum.HTTP_OK)
            .json(this.presenter.setRequest(req).presentAll(resources))
    }

    importCsv(req: Request, res: Response): Response {
        this.service.importCsv(req.file)

        return res
            .status(ResponseTypeEnum.HTTP_OK)
            .json({ message: 'The file was uploaded successfully' })
    }
}
